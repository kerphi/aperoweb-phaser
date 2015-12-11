build:
	docker build -t aperoweb-phaser --build-arg http_proxy --build-arg https_proxy .

run:
	docker run -it -p 3000:3000 aperoweb-phaser
