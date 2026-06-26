# EcoValuate Project Rules

## Auto Git Commit & Push

After completing **every coding task** in this workspace, you MUST:

1. Run `git add -A` to stage all changed frontend files (exclude `MINOR-PROJECT-BACKEND/` — it has its own repo).
2. Run `git commit -m "<conventional commit message describing the change>"` using a clear, descriptive message.
3. Run `git push origin main` to push to `https://github.com/YashG1195/Ecovaluate.git`.

Use [Conventional Commits](https://www.conventionalcommits.org/) format for commit messages:
- `feat:` for new features
- `fix:` for bug fixes
- `style:` for visual/CSS changes
- `refactor:` for code restructuring
- `chore:` for tooling/config updates

**Never** stage or commit the `MINOR-PROJECT-BACKEND/` directory from the outer repo — it is listed in `.gitignore` and has its own separate git repository.

Do this automatically without asking for confirmation each time.
