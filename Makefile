# development
run:
	npm run serve

docdevup:
	docker-compose \
		-f ./config/.docker/docker-compose.yml \
		-f ./config/.docker/docker-compose.dev.yml \
		up -d

docdevbuild:
	docker-compose \
		-f ./config/.docker/docker-compose.yml \
		-f ./config/.docker/docker-compose.dev.yml \
		up -d --build

docdevdown:
	docker volume prune -f && \
	docker-compose \
		-f ./config/.docker/docker-compose.yml \
		-f ./config/.docker/docker-compose.dev.yml \
		down

# production
docprodup:
	docker-compose \
		-f ./config/.docker/docker-compose.yml \
		-f ./config/.docker/docker-compose.prod.yml \
		up -d --build

docproddown:
	docker volume prune -f && \
	docker-compose \
		-f ./config/.docker/docker-compose.yml \
		-f ./config/.docker/docker-compose.prod.yml \
		down

git:
	git push origin main

api:
	git push heroku main

client:
	cd client && npm run build:local && firebase deploy && cd ..
