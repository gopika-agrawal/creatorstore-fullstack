package com.example.creatorstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class CreatorstoreApplication {

	public static void main(String[] args) {

		Dotenv dotenv = Dotenv.configure().directory("C:/Projects/creatorstore-fullstack/creatorstore").ignoreIfMissing().load();

		dotenv.entries().forEach((entry) -> {
			System.setProperty(
				entry.getKey(),
				entry.getValue().trim()
			);
		});

		System.out.println(dotenv.get("DATABASE_URL"));

		SpringApplication.run(CreatorstoreApplication.class, args);
	}

}
