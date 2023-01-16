git clone https://github.com/tholian-network/stealth.git;

# Make everything
node ./make.mjs;

# Start Stealth Service (optional debug flag)
node ./stealth/stealth.mjs serve --debug=true;

# Open as Progressive Web App
node ./browser/browser.mjs;

# Alternatively open Stealth's Browser UI in a Web Browser
# gio open "http://localhost:65432"
