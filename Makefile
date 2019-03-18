# Makefile

include .lily/lily_assistant.makefile

.PHONY: start_jupyter_notebook
start_jupyter_notebook: ## start jupyter notebook server
	source env.sh && \
	jupyter notebook
