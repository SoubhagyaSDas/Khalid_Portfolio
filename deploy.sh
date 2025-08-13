#!/bin/bash

# Deployment script for Khalid's Portfolio Website
# This script helps set up and deploy the website to GitHub Pages

echo "🚀 Khalid Portfolio Website Deployment Script"
echo "=============================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Initial portfolio website deployment"

# Check if remote origin exists
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Please add your GitHub repository as remote origin:"
    echo "   git remote add origin https://github.com/yourusername/khalid-portfolio.git"
    echo ""
    echo "📋 Then run: git push -u origin main"
else
    echo "🚀 Pushing to GitHub..."
    git push origin main
fi

echo ""
echo "✅ Deployment script completed!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings > Pages"
echo "3. Select 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/ (root)' folder"
echo "5. Click Save"
echo ""
echo "🌐 Your website will be available at:"
echo "   https://yourusername.github.io/khalid-portfolio"
echo ""
echo "📝 Don't forget to:"
echo "- Replace assets/profile.jpg with your actual photo"
echo "- Update personal information in index.html"
echo "- Customize colors and styling in style.css"
echo "- Add your actual LinkedIn profile URL" 