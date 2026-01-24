# GitHub Commit Automation Skill

## Description
Automates the process of committing and pushing changes to GitHub with intelligent commit message generation.

## Usage
```
/github-commit [message]
```

## Instructions

When this skill is invoked, follow these steps:

1. **Check Git Status**
   - Run `git status` to see all changes
   - Run `git diff` to see detailed changes
   - Run `git log --oneline -5` to understand commit message style

2. **Analyze Changes**
   - Review all modified, added, and deleted files
   - Understand the nature of changes (feature, fix, refactor, docs, etc.)
   - Identify the scope of changes

3. **Generate Commit Message**
   - If user provided a message argument, use it
   - Otherwise, create a semantic commit message based on changes:
     - Format: `<type>: <subject>` (first line)
     - Detailed description (body)
     - Co-authored tag

   Common types:
   - `feat`: New feature
   - `fix`: Bug fix
   - `docs`: Documentation changes
   - `style`: Formatting, styling
   - `refactor`: Code refactoring
   - `test`: Adding tests
   - `chore`: Maintenance tasks
   - `build`: Build system changes

4. **Stage and Commit**
   - Stage all relevant files (prefer specific files over `git add -A`)
   - Create commit with generated message
   - Include co-authored tag: `Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>`

5. **Push to Remote**
   - Push changes to the remote repository
   - Verify push was successful

6. **Report Results**
   - Show commit hash
   - Show files changed
   - Show push status

## Example

User runs: `/github-commit`