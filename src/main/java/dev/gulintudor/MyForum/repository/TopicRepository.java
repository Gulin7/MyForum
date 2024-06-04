package dev.gulintudor.MyForum.repository;

import dev.gulintudor.MyForum.model.Topic;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TopicRepository extends MongoRepository<Topic, ObjectId> {
    boolean existsByTitle(String title);

    Topic findByTitle(String title);
}
