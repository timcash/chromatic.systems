copilot notes.md

curl https://api.openai.com/v1/engines/davinci/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <API_KEY>" \
-d '{"prompt": "This is a test", "max_tokens": 5}'