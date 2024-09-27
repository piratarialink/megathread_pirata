#!/usr/bin/env bash
set -eo pipefail

git_push_args=("$*") # argumentos extras, ex: --dry-run

# URLs dos repositórios
codeberg_source='git@codeberg.org:pirataria/megathread'
gitlab_target='git@gitlab.com:Heus_Sueh/Megathread'

mirror_dir="$(mktemp -d)/mirror"
mkdir -p "$mirror_dir"
printf 'Temporary mirror directory: %s\n' "$mirror_dir"

# Navegar até o diretório temporário
cd "$mirror_dir" || exit 1

# Clonar o repositório de origem (Codeberg) usando --mirror
source_repo="$codeberg_source.git"
printf 'Cloning %s ...\n' "$source_repo"
git clone --mirror "$source_repo"
cd "$mirror_repo.git" || exit 1

# Configurar o repositório de destino (GitLab) como a origem de push
target_repo="$gitlab_target.git"
git remote set-url --push origin "$target_repo"
printf 'Mirroring %s to: %s\n' "$source_repo" "$target_repo"

# Empurrar (push) para o GitLab
printf 'git push --mirror %s\n' "${git_push_args[@]}"
if ((${#git_push_args[@]})); then
	git push --mirror "${git_push_args[@]}"
else
	git push --mirror
fi

# Limpar o diretório temporário
rm -rf "$mirror_dir"
