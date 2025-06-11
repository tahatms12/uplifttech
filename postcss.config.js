diff --git a//dev/null b/uplifttech/postcss.config.js
index 0000000000000000000000000000000000000000..f469a7162c0db45d04e4d1f2cc25d56fe11b5f59 100644
--- a//dev/null
+++ b/uplifttech/postcss.config.js
@@ -0,0 +1,8 @@
+export default {
+  plugins: {
+    'tailwindcss/nesting': {},
+    tailwindcss: {},
+    autoprefixer: {},
+    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
+  },
+};
