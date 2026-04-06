#!/usr/bin/env bash
# sync-to-repo.sh — Copy updated schema and SQL files from source build dirs into this git repo.
# Run this after rebuilding knowledge base files in /opt/rhpl/local-ai/.
# Review changes with: git diff schema/ sql-queries/ prompts/
# Then commit with: git add -A && git commit -m "sync: update from source rebuild"

set -euo pipefail

REPO_DIR="/var/opt/rhpl/polarissql"
SCHEMA_SRC="/opt/rhpl/local-ai/schema-converted"
SQL_SRC="/opt/rhpl/local-ai/sql-converted"
PROMPTS_SRC="/home/dbrown/local-ai"

echo "[sync] Syncing schema files..."
cp -v "$SCHEMA_SRC/polaris_core_tables.md"         "$REPO_DIR/schema/"
cp -v "$SCHEMA_SRC/schema-lookup-values.md"        "$REPO_DIR/schema/"
cp -v "$SCHEMA_SRC/schema-core-create-tables.md"   "$REPO_DIR/schema/"
cp -v "$SCHEMA_SRC/schema-create-patrons.md"       "$REPO_DIR/schema/"
cp -v "$SCHEMA_SRC/schema-create-items.md"         "$REPO_DIR/schema/"
cp -v "$SCHEMA_SRC/schema-create-catalog.md"       "$REPO_DIR/schema/"
cp -v "$SCHEMA_SRC/schema-create-circulation.md"   "$REPO_DIR/schema/"
cp -v "$SCHEMA_SRC/schema-create-transactions.md"  "$REPO_DIR/schema/"
cp -v "$SCHEMA_SRC/schema-create-acquisitions.md"  "$REPO_DIR/schema/"
cp -v "$SCHEMA_SRC/schema-create-admin.md"         "$REPO_DIR/schema/"
cp -v "$SCHEMA_SRC/schema-view-definitions.md"     "$REPO_DIR/schema/"
cp -v "$SCHEMA_SRC/schema-key-tables.md"           "$REPO_DIR/schema/"
cp -v "$SCHEMA_SRC/schema-columns-nullability.md"  "$REPO_DIR/schema/"

echo "[sync] Syncing SQL query files..."
cp -v "$SQL_SRC/acquisitions.md"           "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/administration.md"         "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/bookmobile.md"             "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/cataloging.md"             "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/circulation.md"            "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/collection-management.md"  "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/data-management.md"        "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/fines-accounts.md"         "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/holds.md"                  "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/ill.md"                    "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/items.md"                  "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/notifications.md"          "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/patrons.md"                "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/reporting.md"              "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/find-tool-reference.md"    "$REPO_DIR/sql-queries/"
cp -v "$SQL_SRC/sql-patterns.md"           "$REPO_DIR/sql-queries/"

echo "[sync] Syncing system prompts..."
cp -v "$PROMPTS_SRC/sql-system-prompts.md" "$REPO_DIR/prompts/"

echo ""
echo "[sync] Done. Review changes with:"
echo "  git -C $REPO_DIR diff"
echo ""
echo "[sync] To commit and push:"
echo "  git -C $REPO_DIR add -A && git -C $REPO_DIR commit -m 'sync: update from source rebuild' && git -C $REPO_DIR push origin main"
