# Zelix

Quantitative trading terminal for Solana. Build, backtest, and deploy trading strategies.

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build
```

## Project Structure

```
apps/
  web/          # Trading terminal frontend
  docs/         # Documentation site
packages/
  ui/           # Shared UI components
  zelix/        # Core trading SDK
```

## Environment Variables

Copy the example env file and add your RPC endpoint:

```bash
cp apps/web/.env.example apps/web/.env.local
```

## License

MIT
