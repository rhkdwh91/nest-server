import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const nest = await NestFactory.create(AppModule);
  await nest.listen(4000);
}

bootstrap();
