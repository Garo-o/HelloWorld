package com.ssafy.api.controller;

import com.ssafy.api.dto.PostDto;
import com.ssafy.api.dto.SignUpDto;
import com.ssafy.api.dto.UserDto;
>>>>>>> backend-java/src/main/java/com/ssafy/api/controller/PostController.java
import com.ssafy.api.service.PostService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.Response;
import com.ssafy.common.util.JwtTokenUtil;
import com.ssafy.db.entity.Post;
import io.lettuce.core.dynamic.annotation.Param;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.transform.OutputKeys;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/post")
public class PostController {

    private final PostService postService;
    private final Response response;
    private final UserService userService;
    private final JwtTokenUtil jwtTokenUtil;

    @GetMapping("")
    @ApiOperation(value = "포스트", notes = "<strong>모든</strong> 포스트를 가져온다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> getAllPosts() {
        return response.success(postService.getAllPosts(), "getAllPosts success" , HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPostById(@PathVariable Long id){
        return response.success(postService.getPostById(id), "getPostById success", HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> modifyPost(@RequestBody PostDto postDto){
        postService.modifyPost(postDto);
        return response.success(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> removePost(@PathVariable Long id){
        postService.removePost(id);
        return response.success(HttpStatus.OK);
    }

    @PostMapping("/insert")
    public ResponseEntity<?> insertPost(@RequestHeader("Authorization") String bearerToken
                                        ,@RequestBody PostDto postDto) {
        postService.insertPost(postDto, jwtTokenUtil.getEmailFromToken(bearerToken));
        return response.success(HttpStatus.OK);
    }

}


