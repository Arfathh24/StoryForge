# Build StoryForge APK from your phone

1. Create a new GitHub repository from your phone. A name like `StoryForge` is fine.
2. Upload all files/folders from this project to the repository, preserving `.github/workflows/build-apk.yml`.
3. Open the repository's **Actions** tab.
4. Open **Build StoryForge APK** and tap **Run workflow** (or push to `main`, which starts it automatically).
5. Wait for the workflow to finish.
6. Open the completed workflow run and scroll to **Artifacts**.
7. Download `StoryForge-debug-apk.zip` and extract `app-debug.apk`.
8. Tap the APK to install StoryForge.

The build is a debug APK for personal testing. For a Play Store release, a signed release keystore and release build should be added later.
