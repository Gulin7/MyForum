package dev.gulintudor.MyForum.service;

import dev.gulintudor.MyForum.model.Topic;
import dev.gulintudor.MyForum.repository.TopicRepository;
import dev.gulintudor.MyForum.repository.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TopicService {
    //database access methods
    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private UserRepository userRepository;

    //return all topics
    public List<Topic> getAllTopics() {
        return topicRepository.findAll();
    }

    public Optional<Topic> getTopicById(ObjectId id){
        return topicRepository.findById(id);
    }

    public Topic getTopicByTitle(String title){
        return this.topicRepository.findByTitle(title);
    }

    public Topic createTopic(String title, String username){

        if(userRepository.findByUsername(username) == null){
            throw new RuntimeException("User does not exist");
        }

        if(topicRepository.existsByTitle(title)){
            throw new RuntimeException("Topic already exists");
        }

        Topic topic = new Topic();
        topic.setTitle(title);
        topic.setUsername(username);
        return topicRepository.save(topic);
    }
}
