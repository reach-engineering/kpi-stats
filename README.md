# KPI Stats

## Configuration

### Step 1. Install dependencies

```bash
npm install
```

### Step 2. Set up environment variables

Run the following command to copy the contents of [`.env.local.example`][`.env.local.example`] into a new `.env.local` file. If `.env.local` already exists, you’ll be prompted before it’s overwritten. Then, update the values in .env.local with the correct ones for your environment.

```bash
cp -i .env.local.example .env.local
```

### Step 3. Run the studio app locally

```bash
npm run dev
```

If everything runs as it should then you can see the CMS **[here](http://localhost:3000/studio)**

### Step 4. Install VSCode extension for sorting imports

Install this **[plugin](https://marketplace.visualstudio.com/items?itemName=mike-co.import-sorter)** for consistent import sorting in the repository.

> [!TIP]
> Check the box for **Import Sorter > General Configuration: Sort On Before Save**.


[`.env.local.example`]: .env.local.example