# 🚀 Quick Start Guide - C++ Development on Windows

Follow these steps in order to set up your C++ development environment.

---

## ✅ Step 1: Install MSYS2 (C++ Compiler)

### Download and Install:
1. **Go to**: https://www.msys2.org/
2. **Download** the installer: `msys2-x86_64-YYYYMMDD.exe`
3. **Run the installer** and use default settings
4. **Click Finish** (keep "Run MSYS2 now" checked)

### Install GCC Compiler:
5. In the MSYS2 terminal that opens, type:
   ```bash
   pacman -Syu
   ```
   - Press **Y** and **Enter** when asked
   - The window will close when done

6. **Re-open** "MSYS2 UCRT64" from Start Menu

7. Type this command:
   ```bash
   pacman -S mingw-w64-ucrt-x86_64-gcc mingw-w64-ucrt-x86_64-gdb
   ```
   - Press **Y** and **Enter**
   - Wait for it to complete

---

## ✅ Step 2: Add to PATH

1. Press **Windows Key** and search: `Environment Variables`
2. Click **"Edit the system environment variables"**
3. Click the **"Environment Variables"** button
4. Under **"System variables"**, find and select **"Path"**
5. Click **"Edit"**
6. Click **"New"**
7. Add: `C:\msys64\ucrt64\bin`
8. Click **OK** on all windows
9. **IMPORTANT**: Close and reopen VS Code completely

---

## ✅ Step 3: Install VS Code Extensions

1. In VS Code, press **Ctrl + Shift + X** (opens Extensions)
2. Search for and install these extensions:
   - **C/C++** (by Microsoft)
   - **C/C++ Extension Pack** (by Microsoft)
   - **Code Runner** (by Jun Han) - optional but helpful

---

## ✅ Step 4: Verify Installation

1. Open a **new** PowerShell terminal in VS Code (Terminal → New Terminal)
2. Type:
   ```powershell
   g++ --version
   ```
3. You should see version information. If not, restart your computer and try again.

---

## 🎯 Step 5: Run Your First Program

1. Open `hello.cpp` in VS Code
2. **Method 1 (Quick)**: Press **Ctrl + Alt + N** (Code Runner)
3. **Method 2 (Manual)**:
   ```powershell
   g++ hello.cpp -o hello
   ./hello
   ```

---

## 📝 What You've Got

I've created several files for you:

### Sample Programs:
- **hello.cpp** - Your first C++ program
- **variables.cpp** - Learn about data types
- **calculator.cpp** - Interactive calculator

### Configuration Files (in .vscode folder):
- **tasks.json** - Build configuration
- **launch.json** - Debug configuration
- **c_cpp_properties.json** - IntelliSense settings

---

## 🆘 Troubleshooting

### "g++ is not recognized"
- Make sure you added the PATH correctly: `C:\msys64\ucrt64\bin`
- Restart VS Code completely
- Try restarting your computer

### Compilation errors
- Check your syntax carefully
- Make sure the file is saved (Ctrl + S)
- Check for missing semicolons `;`

### Code Runner not working
- Make sure the extension is installed
- Check that g++ is in your PATH
- Try the manual compile method instead

---

## 📚 Next Steps

Once everything works:
1. Try modifying `hello.cpp`
2. Run `variables.cpp` to learn data types
3. Test the `calculator.cpp` program
4. Read the full guide in `CPP_SETUP_GUIDE.md`

---

## 💡 Pro Tips

- **Save often** with Ctrl + S
- **Compile before running** - C++ needs compilation
- **Read error messages** - they tell you what's wrong
- **Practice daily** - consistency is key
- **Google errors** - you're not alone!

---

**Good luck! 🎉 You're about to start an amazing journey with C++!**
