package dev.gulintudor.MyForum.controller;

import dev.gulintudor.MyForum.service.PostService;
import dev.gulintudor.MyForum.model.Post;
import org.apache.coyote.Response;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public ResponseEntity<List<Post>> getAllPosts() {
        return new ResponseEntity<List<Post>>(postService.getAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/id")
    public ResponseEntity<Optional<Post>> getPostById(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Post>>(postService.getPostById(id), HttpStatus.OK);
    }

    @GetMapping("/topic/{title}")
    public ResponseEntity<List<Post>> getAllPostsByTopicId(@PathVariable String title) {
        return new ResponseEntity<List<Post>>(postService.getAllPostsByTopicTitle(title), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> createPost(@RequestBody Post post) {
        try {
            Post createdPost = postService.createPost(post.getComment(), post.getTopicTitle(), post.getUsername());
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create post: " + e.getMessage());
        }
    }

    //delete a post
    @PostMapping("/id")
    public ResponseEntity<?> deletePost(@PathVariable ObjectId id) {
        try {
            postService.deletePost(id);
            return ResponseEntity.ok("Post deleted");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
