# ETAPA 1: Build
FROM node:20-slim AS builder

WORKDIR /app

# Copia apenas os arquivos de definição
COPY package*.json ./

# Instala as dependências limpas para a arquitetura Linux do container
# O esbuild será instalado aqui corretamente
RUN npm install

# Agora copia o código fonte (o .dockerignore vai impedir de copiar a node_modules local)
COPY . .

# Usa o npx diretamente. Como instalamos agora, ele vai funcionar.
RUN npx esbuild chatbot.ts \
    --bundle \
    --minify \
    --platform=node \
    --format=esm \
    --target=node20 \
    --outfile=dist/bundle.js \
    --external:./node_modules/*

# ETAPA 2: Produção
FROM node:20-alpine AS runner

# Instala dependências nativas para o Canvas/Sharp
RUN apk add --no-cache \
    pango \
    cairo \
    jpeg \
    giflib \
    librsvg

WORKDIR /app

# Copia o bundle e as dependências da etapa anterior
COPY --from=builder /app/dist/bundle.js ./dist/bundle.js
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/bundle.js"]