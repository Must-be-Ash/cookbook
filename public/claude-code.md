# Claude Code Installation Guide


## Initial Setup Attempt

### Prerequisites Check ✅
- **Node.js**: v22.17.1 (exceeds requirement of Node.js 18+)
- **npm**: v10.9.2 (compatible)
- **OS**: macOS (darwin 24.5.0)
- **Shell**: zsh

### First Installation Attempt
```bash
npm install -g @anthropic-ai/claude-code
```

**Result**: ❌ If Permission Error
```
npm error code EACCES
npm error syscall mkdir
npm error path /usr/local/lib/node_modules/@anthropic-ai
npm error errno -13
npm error Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/@anthropic-ai'
```

## Problem Analysis

The error occurred because:
- npm was trying to install to `/usr/local/lib/node_modules/`
- This directory requires root permissions on macOS
- The system rejected the operation due to insufficient permissions

## Solution: Local Installation Method

### Step 1: Install to User Directory
```bash
npm install -g @anthropic-ai/claude-code --prefix ~/.npm-global
```

**Result**: ✅ Success
```
added 3 packages in 825ms
2 packages are looking for funding
```

### Step 2: Add to PATH
```bash
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

### Step 3: Verify Installation
```bash
ls -la ~/.npm-global/bin/claude
# Output: lrwxr-xr-x@ 1 ashnouruzi staff 52 Jul 22 11:29 /Users/ashnouruzi/.npm-global/bin/claude -> ../lib/node_modules/@anthropic-ai/claude-code/cli.js
```

### Step 4: Test Installation
```bash
~/.npm-global/bin/claude doctor
```

**Result**: ❌ Command hung indefinitely

## Final Solution: Migrate to Local Installation

### Step 5: Use Built-in Migration Tool
```bash
~/.npm-global/bin/claude migrate-installer
```

**Result**: ✅ Success
```
✓ Global installation removed successfully!

Claude Code is now installed locally.
Please restart your shell, then run claude.

·  Happy Clauding!
```

### Step 6: Restart Shell
```bash
exec zsh
```

## Final Status

✅ **Claude Code successfully installed locally**
- Location: `~/.claude/local/`
- No permission issues
- No sudo required for updates
- Ready to use with `claude` command

## Key Takeaways

1. **Permission Issues**: macOS restricts global npm installations to system directories
2. **Local Installation**: The recommended approach avoids permission problems entirely
3. **Migration Tool**: Claude Code provides a built-in tool to move from global to local installation
4. **User Directory**: Installing to `~/.npm-global` or using local installation keeps everything in user space

## Next Steps

After installation, you can:
- Run `claude` to start interactive mode
- Use `claude "task"` for one-time tasks
- Run `claude doctor` to check installation health
- Configure settings with `claude config`
