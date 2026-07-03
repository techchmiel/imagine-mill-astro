One-line: A dark, terminal-style code block for the tech tutorials — pass a snippet via `code`, label the `language`, and optionally show a `filename`.

```jsx
<CodeBlock
  language="PowerShell"
  filename="Set-Sharing.ps1"
  code={`Connect-SPOService -Url https://contoso-admin.sharepoint.com\nSet-SPOTenant -SharingCapability ExternalUserSharingOnly`}
/>
```

The window dots use the brand's red/green/blue node colors. Content can also be passed as children.
