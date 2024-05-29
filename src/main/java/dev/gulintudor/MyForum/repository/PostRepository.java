package dev.gulintudor.MyForum.repository;

import dev.gulintudor.MyForum.model.Post;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends MongoRepository<Post, ObjectId> {
    List<Post> findByTopicTitle(String topicTitle);
}
