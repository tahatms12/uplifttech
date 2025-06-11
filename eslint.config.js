diff --git a//dev/null b/uplifttech/eslint.config.js
index 0000000000000000000000000000000000000000..82c2e20ccc2bae01b6589f5f391cb20f34db41fd 100644
--- a//dev/null
+++ b/uplifttech/eslint.config.js
@@ -0,0 +1,28 @@
+import js from '@eslint/js';
+import globals from 'globals';
+import reactHooks from 'eslint-plugin-react-hooks';
+import reactRefresh from 'eslint-plugin-react-refresh';
+import tseslint from 'typescript-eslint';
+
+export default tseslint.config(
+  { ignores: ['dist'] },
+  {
+    extends: [js.configs.recommended, ...tseslint.configs.recommended],
+    files: ['**/*.{ts,tsx}'],
+    languageOptions: {
+      ecmaVersion: 2020,
+      globals: globals.browser,
+    },
+    plugins: {
+      'react-hooks': reactHooks,
+      'react-refresh': reactRefresh,
+    },
+    rules: {
+      ...reactHooks.configs.recommended.rules,
+      'react-refresh/only-export-components': [
+        'warn',
+        { allowConstantExport: true },
+      ],
+    },
+  }
+);
