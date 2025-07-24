# Common Issues & Debugging

> Frequent issues encountered during Mini App development and their solutions

export const Button = ({children, disabled, variant = "primary", size = "medium", iconName, roundedFull = false, className = '', fullWidth = false, onClick = undefined}) => {
  const variantStyles = {
    primary: 'bg-blue text-black border border-blue hover:bg-blue-80 active:bg-[#06318E] dark:text-white',
    secondary: 'bg-white border border-white text-palette-foreground hover:bg-zinc-15 active:bg-zinc-30',
    outlined: 'bg-transparent text-white border border-white hover:bg-white hover:text-black active:bg-[#E3E7E9]'
  };
  const sizeStyles = {
    medium: 'text-md px-4 py-2 gap-3',
    large: 'text-lg px-6 py-4 gap-5'
  };
  const sizeIconRatio = {
    medium: '0.75rem',
    large: '1rem'
  };
  const classes = ['text-md px-4 py-2 whitespace-nowrap', 'flex items-center justify-center', 'disabled:opacity-40 disabled:pointer-events-none', 'transition-all', variantStyles[variant], sizeStyles[size], roundedFull ? 'rounded-full' : 'rounded-lg', fullWidth ? 'w-full' : 'w-auto', className];
  const buttonClasses = classes.filter(Boolean).join(' ');
  const iconSize = sizeIconRatio[size];
  return <button type="button" disabled={disabled} className={buttonClasses} onClick={onClick}>
      <span>{children}</span>
      {iconName && <Icon name={iconName} width={iconSize} height={iconSize} color="currentColor" />}
    </button>;
};

export const BaseBanner = ({content = null, id, dismissable = true}) => {
  const LOCAL_STORAGE_KEY_PREFIX = 'cb-docs-banner';
  const [isVisible, setIsVisible] = useState(false);
  const onDismiss = () => {
    localStorage.setItem(`${LOCAL_STORAGE_KEY_PREFIX}-${id}`, 'false');
    setIsVisible(false);
  };
  useEffect(() => {
    const storedValue = localStorage.getItem(`${LOCAL_STORAGE_KEY_PREFIX}-${id}`);
    setIsVisible(storedValue !== 'false');
  }, []);
  if (!isVisible) {
    return null;
  }
  return <div className="fixed bottom-0 left-0 right-0 bg-white py-8 px-4 lg:px-12 z-50 text-black dark:bg-black dark:text-white border-t dark:border-gray-95">
      <div className="flex items-center max-w-8xl mx-auto">
        {typeof content === 'function' ? content({
    onDismiss
  }) : content}
        {dismissable && <button onClick={onDismiss} className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" aria-label="Dismiss banner">
          ✕
        </button>}
      </div>
    </div>;
};

## **Prerequisites & Setup Verification**

Before debugging, ensure your Mini App has the foundational requirements in place.

### **Required Files and Structure**

Your Mini App must have these files in the correct locations:

```html
your-domain.com/
├── .well-known/
│   └── farcaster.json          # Required manifest file
├── your-app/
│   ├── index.html              # Your app entry point
│   └── ...                     # Your app files
```

### **Environment Setup Checklist**

* Domain is accessible via HTTPS
* Manifest file exists at `/.well-known/farcaster.json`
* All image URLs are publicly accessible

### **Basic Validation Steps**

1. **Test manifest accessibility**: Visit `https://yourdomain.com/.well-known/farcaster.json`
2. **Validate JSON syntax**: Use [JSONLint](https://jsonlint.com/) to check your manifest
3. **Test app loading**: Ensure your app loads without console errors

## **Quick Diagnostic Workflow**

**Is your app not appearing in search results?** → [Go to App Discovery & Indexing Issues](#1-app-discovery--indexing-issues)

**Is your app not rendering as an embed when shared?** → [Go to Embed Rendering Issues](#3-embed-rendering-issues)

**Are you having wallet connection problems?** → [Go to Wallet Connection Problems](#4-wallet-connection-problems)

**Are you looking for testing tools ?** → [Go to Mobile Testing & Debugging](#5-mobile-testing--debugging)

**Are changes not appearing after updates?** → [Go to Manifest Configuration Problems](#2-manifest-configuration-problems)

## **Detailed Problem Solutions**

## **1. App Discovery & Indexing Issues**

**Problem**: Your Mini App doesn't appear in search results or app catalogs.

**Root Cause**: Missing or incomplete manifest configuration.

**Solution**: Ensure your manifest at `/.well-known/farcaster.json` includes all required fields:

```json
{
  "accountAssociation": {
    "header": "eyJmaWQiOjkxNTIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgwMmVmNzkwRGQ3OTkzQTM1ZkQ4NDdDMDUzRURkQUU5NDBEMDU1NTk2In0",
    "payload": "eyJkb21haW4iOiJyZXdhcmRzLndhcnBjYXN0LmNvbSJ9",
    "signature": "MHgxMGQwZGU4ZGYwZDUwZTdmMGIxN2YxMTU2NDI1MjRmZTY0MTUyZGU4ZGU1MWU0MThiYjU4ZjVmZmQxYjRjNDBiNGVlZTRhNDcwNmVmNjhlMzQ0ZGQ5MDBkYmQyMmNlMmVlZGY5ZGQ0N2JlNWRmNzMwYzUxNjE4OWVjZDJjY2Y0MDFj"
  },
  "frame": {
    "version": "1",
    "name": "Example Mini App",
    "iconUrl": "https://example.com/app.png",
    "splashImageUrl": "https://example.com/logo.png",
    "splashBackgroundColor": "#000000",
    "homeUrl": "https://example.com",
    "webhookUrl": "https://example.com/api/webhook",
    "subtitle": "Example Mini App subtitle",
    "description": "Example Mini App subtitle",
    "screenshotUrls": [
      "https://example.com/screenshot1.png",
      "https://example.com/screenshot2.png",
      "https://example.com/screenshot3.png"
    ],
    "primaryCategory": "social",
    "tags": [
      "example",
      "mini app",
      "coinbase wallet"
    ],
    "heroImageUrl": "https://example.com/og.png",
    "tagline": "Example Mini App tagline",
    "ogTitle": "Example Mini App",
    "ogDescription": "Example Mini App description",
    "ogImageUrl": "https://example.com/og.png"
  }
}
```

<Info>
  In the Category section only the top 100 Mini Apps are shared. This is determined by activity such as user sharing.
</Info>

**Critical Requirements**:

* `primaryCategory` is required for searchability and category pages
* `accountAssociation` is required for verification

**Reference**: [Complete manifest guide](https://docs.base.org/base-app/introduction/getting-started#manifest-file-configuration)

### **App Indexing Requirements**

**Problem**: Your app has a manifest but still doesn't appear in catalogs.

**Solution**: Your Mini App must be shared in a cast to be indexed.

**Steps to Index Your App**:

1. Complete your manifest setup
2. Share your Mini App URL in a cast
3. Indexing can take up to 10 minutes
4. Verify appearance in app catalogs

### **Caching Issues - Changes Not Appearing**

**Problem**: Updates to your manifest or app aren't showing up.

**Why This Happens**: Farcaster clients cache manifest data for up to 24 hours for performance.

**Solutions**:

1. **Force Refresh**: Share your Mini App in a new cast to trigger cache refresh. This can take up to 10 minutes

## **2. Manifest Configuration Problems**

### **Image Display Issues**

**Problem**: App icons or images not displaying correctly.

**Debug Steps**:

1. Test image accessibility in incognito browser
2. Verify image format (PNG, JPG, WebP supported)
3. Check image dimensions (icons should be 200x200px minimum)
4. Ensure HTTPS URLs only

<Frame>
  <img alt="Manifest Embed Example" src="https://mintlify.s3.us-west-1.amazonaws.com/base-a060aa97/images/minikit/spec_image.jpeg" height="364" />
</Frame>

## **3. Embed Rendering Issues**

### **Mini App Not Showing as Embed**

**Problem**: Your Mini App URL doesn't render as a rich embed when shared.

**Root Cause**: The embed configuration is not correct.

**Solution**: Make sure the metadata in the head tag has the correct format in order to render correctly. In order for it to work properly for all clients please ensure you’re using the `name="fc:frame" meta tag.`

```html
<meta name="fc:frame" content="...">
```

**Debug Steps**:

1. Test your URL in the [Mini App Embed Tool](https://farcaster.xyz/~/developers/mini-apps/embed)
2. Check meta tag is in `<head>` section

**Success Verification**: Your embed should show an image with a launch button when the URL is shared.

## **4. Wallet Connection Problems**

### **Getting Connected Wallet**

**Problem**: Unable to access user's wallet or connection status.

### **Using MiniKit with OnchainKit (Recommended)**

Minikit uses the Onchainkit wallet connect component that handles this behaviour of box for you without any additional set up.

**Complete Setup**:

```tsx
// 1. Install dependencies
// npm install @coinbase/onchainkit

// 2. Set up your app with MiniKitProvider
import { MiniKitProvider } from '@coinbase/onchainkit/minikit';
import { base } from 'wagmi/chains';

function App() {
  return (
    <MiniKitProvider
      apiKey="your-onchainkit-api-key"
      chain={base}
    >
      <YourAppContent />
    </MiniKitProvider>
  );
}

// 3. Use wallet component
import { Wallet } from '@coinbase/onchainkit/wallet';

function YourAppContent() {
  return (
    <div>
      <Wallet />
      {/* Your app content */}
    </div>
  );
}
```

### **Using Wagmi Hooks Directly (Recommended)**

```tsx
import { useAccount } from 'wagmi';

function WalletInfo() {
  const { address, isConnected } = useAccount();
  
  if (!isConnected) {
    return <div>Please connect your wallet</div>;
  }
  
  return (
    <div>
      <div>Status: Connected</div>
      <div>Address: {address}</div>
    </div>
  );
}
```

<Info>
  MiniKit includes wagmi providers by default - don't add additional wagmi configuration.
</Info>

**Error Handling**:

```tsx
import { useAccount, useConnect } from 'wagmi';

function WalletConnection() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, error, isLoading } = useConnect();

  if (error) {
    return <div>Connection error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Connecting...</div>;
  }

  if (!isConnected) {
    return (
      <button onClick={() => connect({ connector: connectors[0] })}>
        Connect Wallet
      </button>
    );
  }

  return <div>Connected: {address}</div>;
}
```

## **5. Mobile Testing & Debugging**

### **Using Eruda for Mobile Debug**

**Problem**: Difficulty debugging Mini Apps on mobile devices.

**Setup**:

```html
<!-- Add to your HTML head for debugging only -->
<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
<script>
  // Only enable in development
  if (window.location.hostname === 'localhost' || window.location.hostname.includes('ngrok')) {
    eruda.init();
  }
</script>
```

<Info>
  If you are testing specific enviornment behaviour - you can use clientFid :309857
</Info>

**How to Use**:

1. Add the script to your app
2. Open your Mini App on mobile (cast the app in a DM to yourself)
3. Look for the Eruda debugging panel icon (usually bottom-right)
4. Access console, network, elements, and other debugging tools

**Mobile Testing Workflow**:

1. **Local Testing**: Use ngrok or similar to expose localhost
2. **Cast in DM**: Share your app URL in a DM to yourself
3. **Test Different Clients**: Test in Warpcast mobile and other Farcaster clients
4. **Check Different Devices**: Test on both iOS and Android if possible

<Info>
  Remove Eruda before production deployment.
</Info>

## **Advanced Troubleshooting**

### **AI-Assisted Debugging**

**Using Coinbase Wallet Compatibility Validator**:

The Coinbase Wallet team provides an AI-powered validation tool to check Mini App compatibility.

**How to Use**:

1. Use the validator prompt: [CBW MiniApp Validator](https://raw.githubusercontent.com/base/demos/refs/heads/master/minikit/mini-app-help/validate.txt)
2. In your preferred AI code editor (Cursor, etc.):
   * Add the validator file to your project context
   * Ask the AI: "Please validate my Mini App code using the CBW validator guidelines"
3. The AI will return a report of any unsupported actions or compatibility issues

**What it Checks**:

* Unsupported SDK methods
* Coinbase Wallet specific limitations

## **Success Verification**

### **Testing Checklist**

Before deploying your Mini App, verify these items work correctly:

**Basic Functionality**:

* [ ] App loads without console errors
* [ ] All images display correctly
* [ ] Wallet connection works
* [ ] Core app functionality works as expected

**Discovery & Sharing**:

* [ ] Manifest file is accessible at `/.well-known/farcaster.json`
* [ ] App appears in embed when URL is shared
* [ ] App appears in search results (after casting)
* [ ] All required manifest fields are present

## **Getting Additional Help**

If you're still experiencing issues after following this guide:

* [**Mini App Debug Tool**](https://farcaster.xyz/~/developers) - Test your Mini App functionality
* [**Mini App Embed Tool**](https://farcaster.xyz/~/developers/mini-apps/embed) - Preview how embeds will appear
* [**JSONLint**](https://jsonlint.com/) - Validate JSON syntax
* [**Eruda**](https://github.com/liriliri/eruda) - Mobile debugging console
* [Base Discord](https://discord.com/channels/1067165013397213286/1387875275756408883) - #minikit channel

<BaseBanner
  id="privacy-policy"
  dismissable={false}
  content={({ onDismiss }) => (
  <div className="flex items-center">
    <div className="mr-2">
      We're updating the Base Privacy Policy, effective July 25, 2025, to reflect an expansion of Base services. Please review the updated policy here:{" "}
      <a
        href="https://docs.base.org/privacy-policy-2025"
        target="_blank"
        className="whitespace-nowrap"
      >
        Base Privacy Policy
      </a>. By continuing to use Base services, you confirm that you have read and understand the updated policy.
    </div>
    <Button onClick={onDismiss}>I Acknowledge</Button>
  </div>
)}
/>
