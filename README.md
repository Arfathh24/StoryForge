# StoryForge

Full offline writing studio for Android/web.

Features:
- Books/novels, movie scripts, anime scripts, summaries and free writing
- Chapters/scenes/episodes
- Book, ruled, screenplay and dark page styles
- Local autosave with localStorage
- Undo/redo
- Word/character/reading-time counters
- Offline spelling/grammar/punctuation suggestions
- TXT export
- PDF/Print export
- JSON backup/restore
- Responsive mobile UI
- GitHub Actions APK build; no Android Studio required for the build workflow

APK build:
1. Put this repository on GitHub.
2. Ensure `www/` contains the web app.
3. Ensure `.github/workflows/build-apk.yml` exists.
4. Open Actions and run Build StoryForge APK.
5. Download the `StoryForge-debug-apk` artifact.
\n## Windows desktop app\nRun GitHub Actions → Build StoryForge for Windows → Run workflow. Download the StoryForge-Windows artifact; it contains an installer and portable EXE.\n