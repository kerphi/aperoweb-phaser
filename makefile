build:
	docker build -t aperoweb-phaser --build-arg http_proxy --build-arg https_proxy .

run:
	docker run -it aperoweb-phaser
