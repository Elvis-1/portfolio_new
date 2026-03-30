import json
import re
import sys
from pathlib import Path
import requests

def main():
    env_path = Path('.env')
    if not env_path.exists():
        raise SystemExit('.env not found')

    with env_path.open() as f:
        data = f.read().strip().splitlines()

    figma_token = None
    for line in data:
        if line.startswith('FIGMA_TOKEN='):
            figma_token = line.split('=', 1)[1].strip()
            break
    if not figma_token:
        raise SystemExit('FIGMA_TOKEN missing in .env')

    file_key = None
    for line in data:
        if line.startswith('http://') or line.startswith('https://'):
            m = re.search(r'figma\.com/(?:file|design)/([A-Za-z0-9]+)', line)
            if m:
                file_key = m.group(1)
                break
    if not file_key:
        raise SystemExit('Figma file key not found in .env URL')

    url = f'https://api.figma.com/v1/files/{file_key}'
    headers = {'Authorization': f'Bearer {figma_token}'}
    resp = requests.get(url, headers=headers)
    if resp.status_code != 200:
        raise SystemExit(f'Figma API request failed: {resp.status_code} {resp.text}')

    output = Path('figma_export.json')
    output.write_text(json.dumps(resp.json(), indent=2), encoding='utf-8')
    print(f'Export saved to {output.resolve()}')

if __name__ == '__main__':
    main()
