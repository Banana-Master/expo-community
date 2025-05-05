ts, tsx 파일 라인 줄 수 보는 방법.

```bash
git ls-files '*.ts' '*.tsx' | xargs cat | wc -l
```
