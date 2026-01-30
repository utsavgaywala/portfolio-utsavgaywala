# Contact Form Setup Instructions

## 🔧 How to Get Your Web3Forms Access Key

Follow these simple steps to activate your contact form:

### Step 1: Get Your Access Key
1. Go to https://web3forms.com
2. Click "Get Started" or "Create Access Key"
3. Enter your email: **utsavgaywala2004@gmail.com**
4. Click "Create Access Key"
5. Copy the access key they provide (it looks like: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`)

### Step 2: Add the Access Key to Your Form
1. Open `contact.html`
2. Find this line (around line 80):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key:
   ```html
   <input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6">
   ```

### Step 3: Test Your Form
1. Refresh your website
2. Go to the Contact page (OPEN_CHANNEL)
3. Fill out the form with test data
4. Click "TRANSMIT_MESSAGE"
5. You should see animated loading dots
6. After submission, you'll get a success message
7. Check your email at **utsavgaywala2004@gmail.com**

## ✨ What You'll See

### Loading State:
- Button shows 3 animated pulsing dots (●●●)
- Button is disabled during submission
- Matches your website's black and white design

### Success:
- Green success message: "✓ TRANSMISSION SUCCESSFUL! Message received."
- Form automatically clears
- You receive an email with the sender's details

### Error:
- Red error message if something goes wrong
- User can try again or use direct email links

## 📧 Email Format You'll Receive

When someone submits the form, you'll get an email with:
- **Subject**: New Contact Form Submission from Portfolio
- **From**: Portfolio Contact Form
- **Reply-To**: [User's email]
- **Content**: 
  - Name: [User's name]
  - Email: [User's email]
  - Message: [User's message]

## 🎨 Features

✅ Animated loading dots (matches your design)
✅ No page reload (AJAX)
✅ Success/error notifications
✅ Form auto-resets after submission
✅ Fully responsive
✅ Free forever (100 submissions/month)
✅ No verification needed
✅ Works immediately after adding access key

---

**Note**: Web3Forms is completely free for up to 100 submissions per month, which is perfect for a portfolio website!
