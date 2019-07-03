<template>
    <div class="commentContainer">
        <h4>发表评论</h4>
        <hr class="line">
        <textarea class="commentContent" placeholder="请输入评论的内容(最多50字)" maxlength="50"
                  v-model="commentContent"></textarea>
        <mt-button type="primary" size="large" class="commentBtn" @click="comment">发表评论</mt-button>
        <ul>
            <li v-for="(item,i) in commentList" :key="item.add_time">
                <div class="itemTitle">第{{i+1}}楼 用户:{{item.user_name}}
                    发表时间:{{item.add_time|dateFormat}}
                </div>
                <div class="itemContent">{{item.content==""?"这个用户很懒,啥都没留下":item.content}}</div>
            </li>
        </ul>
        <mt-button type="danger" plain size="large" class="loadMore" @click="loadMore">加载更多
        </mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "commnent",
        data: () => {
            return {
                commentContent: "",
                pageSize: 1,
                commentList: []
            }
        },
        props: ["id"],
        created() {
            this.pageSize = 1;
            this.getComments();
        },
        methods: {
            getComments() {
                this.$http.getRequest("getcomments/" + this.id + "?pageindex=" + this.pageSize)
                    .then(res => {
                        if (this.pageSize === 1) {
                            console.log(1111);
                            this.commentList = res.message;
                        } else {
                            //push直接将整个数组加了进去,最后一个是个数组对象
                            //this.commentList.push(res.message);
                            this.commentList = this.commentList.concat(res.message);
                        }
                    })
            },
            loadMore() {
                this.pageSize = this.pageSize + 1;
                this.getComments();
            },
            comment() {
                if (this.commentContent.length == 0) {
                    Toast("请输入评论内容");
                    return;
                }
                this.$http.postRequest("/postcomment/" + this.id, {content: this.commentContent})
                    .then(res => {
                        this.pageSize = 1;
                        this.getComments();
                    })
            }
        }
    }
</script>

<style scoped lang="less">
    .commentContainer {
        .line {
            margin: 10px 0;
        }

        ul {
            margin-top: 5px;

            li {
                .itemTitle {
                    background: #ccc;
                    padding: 5px 0;
                }

                .itemContent {
                    padding: 5px 0;
                    text-indent: 2em;
                }
            }
        }
    }
</style>