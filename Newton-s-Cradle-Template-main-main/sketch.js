const world = Matter.World;
const engine = Matter.Engine;
const bodies = Matter.Bodies;
const body = Matter.Body;

function setup() {
	createCanvas(800, 600);

	var ball_option = {
		restitution: 0.95,
		frictionAir: 0.01,
	}

	ball = Bodies.circle(400, 300, 20, ball_opitions);
	World.add(world, ball);

	engine = engine.create();
	world = engine.world;
}

function draw() {
	backGround(51);

	Engine.update(engine);

	ellipse(ball.position.x, ball.position.y, 20);
}