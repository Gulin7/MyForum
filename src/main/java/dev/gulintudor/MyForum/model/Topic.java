package dev.gulintudor.MyForum.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "topics")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Topic {
    @Id
    private ObjectId id;
    private String title;
    private String username;
}
