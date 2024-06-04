package dev.gulintudor.MyForum.controller;

import dev.gulintudor.MyForum.service.TopicService;
import dev.gulintudor.MyForum.model.Topic;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/topics")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @GetMapping
    public ResponseEntity<List<Topic>> getTopics() {
        return new ResponseEntity<List<Topic>>(topicService.getAllTopics(), HttpStatus.OK);
    }

    @GetMapping("/id")
    public ResponseEntity<Optional<Topic>> getTopicById(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Topic>>(topicService.getTopicById(id), HttpStatus.OK);
    }

    @GetMapping("/title")
    public ResponseEntity<Topic> getTopicByTitle(@RequestParam String title) {
        return new ResponseEntity<Topic>(topicService.getTopicByTitle(title), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> createTopic(@RequestBody Topic topic) {
        try {
            Topic createdTopic = topicService.createTopic(topic.getTitle(), topic.getUsername());
            return ResponseEntity.ok(createdTopic);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
