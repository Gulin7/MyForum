package dev.gulintudor.MyForum.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "posts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id
    private ObjectId id;
    private String comment;
    private String topicTitle;
    private String username;
}

