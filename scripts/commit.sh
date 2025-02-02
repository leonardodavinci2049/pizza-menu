#!/bin/bash
# Script para commit automático: adiciona todas as alterações,
# realiza o commit com a mensagem fornecida e envia para o repositório remoto.

# Verifica se foi passada uma mensagem de commit
if [ -z "$1" ]; then
    echo "Uso: $0 \"mensagem de commit\""
    exit 1
fi

echo "Adicionando todas as alterações..."
git add .

echo "Realizando commit com a mensagem: \"$1\""
git commit -m "$1"

echo "Enviando para o repositório remoto..."
# Aqui usamos 'HEAD' para enviar a branch atual,
# caso deseje especificar uma branch, substitua 'HEAD' pelo nome dela.
git push origin main
