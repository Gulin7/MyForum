package dev.gulintudor.MyForum.service;

import dev.gulintudor.MyForum.model.Post;
import dev.gulintudor.MyForum.repository.PostRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> getPostById(ObjectId id){
        return postRepository.findById(id);
    }

    public List<Post> getAllPostsByTopicTitle(String topicTitle){
        return postRepository.findByTopicTitle(topicTitle);
    }

    public Post createPost(String comment, String topicTitle, String username){
        Post post = new Post();
        post.setComment(comment);
        post.setUsername(username);
        post.setTopicTitle(topicTitle);
        return postRepository.save(post);
    }

    //delete function
    public void deletePost(ObjectId postId) {
        if(!postRepository.existsById(postId)) {
            throw new RuntimeException("Post not found");
        }
        postRepository.deleteById(postId);
    }

    public void deletePostByUsernameAndTopicTitle(String username, String topicTitle) {
        postRepository.deleteByUsernameAndTopicTitle(username, topicTitle);
    }
}
