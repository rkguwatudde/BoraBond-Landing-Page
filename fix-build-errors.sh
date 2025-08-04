#!/bin/bash

# Fix apostrophes in multiple files
sed -i '' "s/SEC's/SEC\&apos;s/g" src/components/Disclaimer.tsx
sed -i '' "s/Africa's/Africa\&apos;s/g" src/components/Footer.tsx
sed -i '' "s/Africa's/Africa\&apos;s/g" src/components/HowItWorks.tsx
sed -i '' "s/Africa's/Africa\&apos;s/g" src/components/TrustedBrands.tsx
sed -i '' "s/We're/We\&apos;re/g" src/components/TrustedBrands.tsx
sed -i '' "s/We're/We\&apos;re/g" src/components/UnsubscribeForm.tsx
sed -i '' "s/We're/We\&apos;re/g" src/components/WhyAfricanBonds.tsx
sed -i '' "s/you're/you\&apos;re/g" src/components/UnsubscribeForm.tsx
sed -i '' "s/don't/don\&apos;t/g" src/components/UnsubscribeForm.tsx

echo "Fixed apostrophes in components"
