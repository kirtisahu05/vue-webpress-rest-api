<template>
    <section class="container">
        <div class="posts">
            <v-img :aspect-ratio="16/9" :src="currentPost.post_thumbnail.URL"></v-img>
            <h1>{{ currentPost.title }}</h1>
            <h4>{{ currentPost.date | moment("from", "now") }}</h4>
            <div class="post-content" v-html="currentPost.content"></div>
        </div>
        <hr>
        <h1>Related Post</h1>
        <div class="related-posts">
            <div class="post" v-for="post in relatedPosts" :key="post.id">
                <post :post="post"></post>
            </div>

        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    import Post from '../../components/Post'

    export default {
        validate({ params }) {
            return /^\d+$/.test(params.postId)
        },
        async asyncData({ params, store }) {
            // TODO: Move this to server side and implement getByID route
            const posts = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/${params.postId}`)
            .then((res) => {
                store.commit('getPostById', res.data)
            }).catch((error) => {
                console.log(error)
            });

            // Getting 405 error as it is on client side, will work as epected when used moved to server side
            // using stub data due to time constraints
            // const relatedPost = await axios.post(
            //     `https://public-api.wordpress.com/rest/v1/sites/107403796/posts/${params.postId}/related/`)
            //     .then((res) => {
            //         let relatedPost = [];
            //         let counter = 0;
            //         res.data.hits.forEach(({ fields }) => {

            //             if(counter < 3) {
            //                 const post = axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/${fields[0].blog_id}/posts/${fields[0].post_id}/`);
            //                 relatedPost.push(post);
            //                 counter++;
            //                 }
            //             }
            //         );
                    store.commit('relatedPost', stubRelatedPost)
            //     }).catch((error) => {
            //         console.log(error)
            //     });

            return;
        },
        computed: {
            currentPost() {
                return this.$store.state.post;
            },
            relatedPosts() {
                return this.$store.state.relatedPost;
            }
        }
    }


    const stubRelatedPost = [
        {
    "ID": 259,
    "site_ID": 107403796,
    "author": {
        "ID": 101559910,
        "login": "lindseylamont",
        "email": false,
        "name": "Lindsey LaMont",
        "first_name": "Lindsey",
        "last_name": "LaMont",
        "nice_name": "lindseylamont",
        "URL": "",
        "avatar_URL": "https://secure.gravatar.com/avatar/bdc1856d18a295d8287591ff200f826c?s=96&d=mm&r=g",
        "profile_URL": "https://en.gravatar.com/bdc1856d18a295d8287591ff200f826c"
    },
    "date": "2015-04-13T10:00:00+01:00",
    "modified": "2016-02-26T17:19:43+01:00",
    "title": "Brand Ambassador of the Month: Mohit!",
    "URL": "https://truecaller.blog/2015/04/13/brand-ambassador-of-the-month-mohit/",
    "short_URL": "https://wp.me/p7gEDi-4b",
    "content": "<div class=\"post-summary\">\n<p>We have a great set of <a href=\"http://bit.ly/TrueAmbass\">Truecrew Brand Ambassadors</a> that are hitting the streets and telling their communities about the Truecaller app. This April, we want to highlight Mohit from Jaipur, India and his achievements in the Truecrew.</p>\n</div>\n<p>We have a great set of <a href=\"http://bit.ly/TrueAmbass\">Truecrew Brand Ambassadors</a> that are hitting the streets and telling their communities about the Truecaller app. This April, we want to highlight Mohit from Jaipur, India and his achievements in the Truecrew.</p>\n<blockquote class=\"twitter-tweet\" lang=\"en\">\n<p>RT<br />\nYIPPEE!<br />\n<a href=\"https://twitter.com/Truecaller\">@Truecaller</a> just received the <a href=\"https://twitter.com/hashtag/Truecrew?src=hash\">#Truecrew</a> goodies bag<br />\nReally love you <a href=\"https://twitter.com/hashtag/Truecaller?src=hash\">#Truecaller</a><br />\nGo Go Go&#8230; <a href=\"https://twitter.com/hashtag/Truecaller?src=hash\">#Truecaller</a> <a href=\"http://t.co/zbpNpxR7iG\">pic.twitter.com/zbpNpxR7iG</a></p>\n<p>— Mohit Badaya (@mohitbadaya) <a href=\"https://twitter.com/mohitbadaya/status/560068214604840960\">January 27, 2015</a>\n</p></blockquote>\n<p> <a href=\"//platform.twitter.com/widgets.js\">//platform.twitter.com/widgets.js</a></p>\n<p><strong>Achievements</strong>:  </p>\n<ul>\n<li>Integrating Truecaller branding into daily life  </li>\n<li>Helping to create an online presence and Word of Mouth marketing for Truecaller  </li>\n<li>Helping the Truecrew continue to succeed through teamwork    </li>\n<li>Participating in <a href=\"http://www.twitter.com/mohitbadaya\">Twitter</a> community to help Indian Truecaller users with the app  </li>\n</ul>\n<p><em>How does team work effect being a brand ambassador?</em><br />\nAll work can be done easily with a team. The same I saw with #Truecaller&#8217;s people. Not only that, but the Truecrew Brand Ambassadors and Truecaller Team really work hard to make Truecaller continue to be the best phone app in the world.</p>\n<p><em>Why do you think Truecrew Brand Ambassadors are important in India?</em><br />\nIndia is Growing in development section, but one more thing is growing even more rapidly; &quot;SPAM&quot; and &quot;Fake Calling&quot;. To help with this, Truecaller is a key for dismissing people who like to disturb others. Truecaller Indian Brand Ambassadors ensure a SPAM Free India. I want to simply say #ThanksTruecaller</p>\n<p><em>What motivates you in general?</em><br />\nActually, I am born in a country where talent is everywhere. So, everything that a person does or has done for my country or has represented my country throughout the world motivates me. Not only that, I love people who help others, just like Truecaller, this all motivates me.</p>\n<p><em>Gadgets Of Choice:</em><br />\nI am a Gadgets lover! I always find,thebest out of available in the market. The best means more features in less price. That&#8217;s why I love my MOTO X, and My iPad.</p>\n",
    "excerpt": "<p>We have a great set of <a href=\"http://bit.ly/TrueAmbass\">Truecrew Brand Ambassadors</a> that are hitting the streets and telling their communities about the Truecaller app. This April, we want to highlight Mohit from Jaipur, India and his achievements in the Truecrew.</p>\n",
    "slug": "brand-ambassador-of-the-month-mohit",
    "guid": "http://blog.truecaller.com/2015/04/13/brand-ambassador-of-the-month-mohit/",
    "status": "publish",
    "sticky": false,
    "password": "",
    "parent": false,
    "type": "post",
    "discussion": {
        "comments_open": false,
        "comment_status": "closed",
        "pings_open": false,
        "ping_status": "open",
        "comment_count": 0
    },
    "likes_enabled": true,
    "sharing_enabled": true,
    "like_count": 0,
    "i_like": false,
    "is_reblogged": false,
    "is_following": false,
    "global_ID": "23a3d2f53001b6db5f386f8a729067c6",
    "featured_image": "https://i0.wp.com/truecaller.blog/wp-content/uploads/2016/02/1428859871_img_20150408_180823.jpg?fit=800%2C800&ssl=1",
    "post_thumbnail": {
        "ID": 258,
        "URL": "https://truecaller.blog/wp-content/uploads/2016/02/1428859871_img_20150408_180823.jpg",
        "guid": "http://truecaller.blog/wp-content/uploads/2016/02/1428859871_img_20150408_180823.jpg",
        "mime_type": "image/jpeg",
        "width": 800,
        "height": 800
    },
    "format": "standard",
    "geo": false,
    "menu_order": 0,
    "page_template": "",
    "publicize_URLs": [],
    "terms": {
        "category": {
            "Truecrew Brand Ambassadors": {
                "ID": 584120124,
                "name": "Truecrew Brand Ambassadors",
                "slug": "truecrew-brand-ambassadors",
                "description": "Learn about the activities of our Truecrew Brand Ambassadors!",
                "post_count": 31,
                "parent": 0,
                "meta": {
                    "links": {
                        "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:truecrew-brand-ambassadors",
                        "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:truecrew-brand-ambassadors/help",
                        "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                    }
                }
            }
        },
        "post_tag": {
            "brand ambassadors": {
                "ID": 1022431,
                "name": "brand ambassadors",
                "slug": "brand-ambassadors",
                "description": "",
                "post_count": 12,
                "meta": {
                    "links": {
                        "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags/slug:brand-ambassadors",
                        "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags/slug:brand-ambassadors/help",
                        "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                    }
                }
            }
        },
        "post_format": {}
    },
    "tags": {
        "brand ambassadors": {
            "ID": 1022431,
            "name": "brand ambassadors",
            "slug": "brand-ambassadors",
            "description": "",
            "post_count": 12,
            "meta": {
                "links": {
                    "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags/slug:brand-ambassadors",
                    "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags/slug:brand-ambassadors/help",
                    "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                }
            }
        }
    },
    "categories": {
        "Truecrew Brand Ambassadors": {
            "ID": 584120124,
            "name": "Truecrew Brand Ambassadors",
            "slug": "truecrew-brand-ambassadors",
            "description": "Learn about the activities of our Truecrew Brand Ambassadors!",
            "post_count": 31,
            "meta": {
                "links": {
                    "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:truecrew-brand-ambassadors",
                    "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:truecrew-brand-ambassadors/help",
                    "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                }
            },
            "parent": 0
        }
    },
    "attachments": {},
    "attachment_count": 0,
    "metadata": [
        {
            "id": "1201",
            "key": "_thumbnail_id",
            "value": "258"
        }
    ],
    "meta": {
        "links": {
            "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/259",
            "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/259/help",
            "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796",
            "replies": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/259/replies/",
            "likes": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/259/likes/"
        }
    },
    "capabilities": {
        "publish_post": false,
        "delete_post": false,
        "edit_post": false
    },
    "other_URLs": {}
},
{
    "ID": 348,
    "site_ID": 107403796,
    "author": {
        "ID": 18608197,
        "login": "truecaller",
        "email": false,
        "name": "Truecaller",
        "first_name": "Truecaller",
        "last_name": "Team",
        "nice_name": "truecaller",
        "URL": "http://blogdottruecallerdotcom.wordpress.com",
        "avatar_URL": "https://secure.gravatar.com/avatar/7ab563cc10a4d6da6db771918a54fbd5?s=96&d=mm&r=g",
        "profile_URL": "https://en.gravatar.com/7ab563cc10a4d6da6db771918a54fbd5"
    },
    "date": "2015-01-27T16:24:53+01:00",
    "modified": "2016-02-26T16:39:00+01:00",
    "title": "What It&#8217;s Like As a Truecaller Brand Ambassador",
    "URL": "https://truecaller.blog/2015/01/27/ambassador-experience/",
    "short_URL": "https://wp.me/p7gEDi-5C",
    "content": "<div class=\"post-summary\">\n<p>My Lindsey Sterling ring tone rings and an unknown number flashes on the screen.</p>\n</div>\n<p><strong>Guest post by Truecrew Brand Ambassador, Vipul Baranwal</strong></p>\n<p>My Lindsey Sterling ring tone rings and an unknown number flashes on the screen.</p>\n<p>“Hello.” </p>\n<p>“Who’s this?” Okay, this used to be the scenario before the year 2009 (or better to say before Truecaller).</p>\n<p>Suddenly, my Lindsey Sterling ring tone sings again…a call from an ‘unknown number,’ but this time I am able to identify the caller instantly. This became possible only because I had installed the Truecaller app on my phone. Having Truecaller is a great phonebook app with smart features that secures me from spam calls and unknown numbers. </p>\n<p><em>The Discovery of a New App</em><br />\nYou know how unknown numbers can be a headache for you sometimes? When I got to know about Truecaller, I started telling other people about this app, especially the old generation. It was a natural app to speak about, especially since anyone with a smartphone has experienced unknown numbers.</p>\n<p><em>My Participation with Truecaller</em><br />\nI saw Truecaller’s Brand Ambassadorship program, and within a fraction of a second I decided to be a part of it. I was selected because of my ideas, and my passion for the brand. Since then I have been promoting the app through various mediums. </p>\n<p>Some of the reasons I fell in love with Truecaller are:<br />\n1) It is a global phone directory at your fingertips.<br />\n2) The way it is helping me and other people throughout in finding different numbers.</p>\n<span class=\"embed-youtube\" style=\"text-align:center; display: block;\"><iframe class='youtube-player' width='560' height='315' src='https://www.youtube.com/embed/videoseries?list=PLvdEHYClkeiRC3qBuUOyYKVuAzI_2G8Lo&#038;hl=en_US' allowfullscreen='true' style='border:0;'></iframe></span>\n<p>During my period with the Truecrew, I have helped spread word about Truecaller to as many people as possible. Presently, half of Truecaller’s users are from India. This means that 1 out of 4 Indian smartphones have the Truecaller app installed. Currently, India has 150 million internet users, and it is our goal to make sure as many smartphone users are aware of the benefits of this product.</p>\n<p><strong>If something is beneficial in the market and for free, everyone has the right to use it.</strong><br />\n<img class=\"aligncenter\" src=\"https://i0.wp.com/truecaller.blog/wp-content/uploads/2016/02/1422449989_ambassador-collaboration1.jpg?w=700&#038;ssl=1\" alt=\"caption:Truecrew Ambassadors are part of a 38-person international network\" data-recalc-dims=\"1\" /></p>\n<p>Here comes our role into play: we ambassadors try to create awareness about the app through online and offline interaction. Currently I am spreading news about Truecaller through my various social media channels, and indulge in various other activities to promote Truecaller within India along with my Truecrew team. </p>\n<p><em>Lessons Learned from Working with the Truecaller Team</em><br />\nUp till now, I have learned a lot working with Truecaller. I have been given a stage to express my creativity in a meaningful manner about the direction of the app. I work with Sakina and Lindsey from the Truecaller Team in Sweden, who act as great advisors for technology and the app. They create activities you love to work with, and are motivating to enhance our skills in the program. They consider all angles acknowledging the app, and provide the ambassadors the freedom to create alongside with their marketing team. I also work with Brand Ambassadors from all over the world!</p>\n<p><img class=\"aligncenter\" src=\"https://i0.wp.com/truecaller.blog/wp-content/uploads/2016/02/1422447014_vipul-blog.png?w=700&#038;ssl=1\" alt=\"IMAGE DESCRIPTION\" data-recalc-dims=\"1\" /></p>\n<p><em>About our Brand Ambassador</em><br />\nHi everyone! I am Vipul one of the Truecaller brand ambassadors from Ranchi, India. Currently I’m pursuing mechanical engineering. I have interest in photography, designing, engines, cricket, volleyball and Tennis. But basically, I am a gadget freak and loves technology. I became the part of Truecaller in August ’14. Since then, it has been fun to be a part of this international team. If you want to be a part of this fun team and the ambassador program, apply by visiting the <a href=\"http://www.truecaller.com/ambassadors\">Truecrew Brand Ambassador site</a>!</p>\n",
    "excerpt": "<p>My Lindsey Sterling ring tone rings and an unknown number flashes on the screen.</p>\n",
    "slug": "ambassador-experience",
    "guid": "http://blog.truecaller.com/2015/01/27/ambassador-experience/",
    "status": "publish",
    "sticky": false,
    "password": "",
    "parent": false,
    "type": "post",
    "discussion": {
        "comments_open": false,
        "comment_status": "closed",
        "pings_open": false,
        "ping_status": "open",
        "comment_count": 0
    },
    "likes_enabled": true,
    "sharing_enabled": true,
    "like_count": 1,
    "i_like": false,
    "is_reblogged": false,
    "is_following": false,
    "global_ID": "a2261ac68be9012ddb3e4453559b7ad5",
    "featured_image": "https://i2.wp.com/truecaller.blog/wp-content/uploads/2016/02/1422449989_ambassador-collaboration.jpg?fit=851%2C315&ssl=1",
    "post_thumbnail": {
        "ID": 345,
        "URL": "https://truecaller.blog/wp-content/uploads/2016/02/1422449989_ambassador-collaboration.jpg",
        "guid": "http://truecaller.blog/wp-content/uploads/2016/02/1422449989_ambassador-collaboration.jpg",
        "mime_type": "image/jpeg",
        "width": 851,
        "height": 315
    },
    "format": "standard",
    "geo": false,
    "menu_order": 0,
    "page_template": "",
    "publicize_URLs": [],
    "terms": {
        "category": {
            "Truecrew Brand Ambassadors": {
                "ID": 584120124,
                "name": "Truecrew Brand Ambassadors",
                "slug": "truecrew-brand-ambassadors",
                "description": "Learn about the activities of our Truecrew Brand Ambassadors!",
                "post_count": 31,
                "parent": 0,
                "meta": {
                    "links": {
                        "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:truecrew-brand-ambassadors",
                        "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:truecrew-brand-ambassadors/help",
                        "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                    }
                }
            }
        },
        "post_tag": {
            "brand ambassadors": {
                "ID": 1022431,
                "name": "brand ambassadors",
                "slug": "brand-ambassadors",
                "description": "",
                "post_count": 12,
                "meta": {
                    "links": {
                        "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags/slug:brand-ambassadors",
                        "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags/slug:brand-ambassadors/help",
                        "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                    }
                }
            }
        },
        "post_format": {}
    },
    "tags": {
        "brand ambassadors": {
            "ID": 1022431,
            "name": "brand ambassadors",
            "slug": "brand-ambassadors",
            "description": "",
            "post_count": 12,
            "meta": {
                "links": {
                    "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags/slug:brand-ambassadors",
                    "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags/slug:brand-ambassadors/help",
                    "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                }
            }
        }
    },
    "categories": {
        "Truecrew Brand Ambassadors": {
            "ID": 584120124,
            "name": "Truecrew Brand Ambassadors",
            "slug": "truecrew-brand-ambassadors",
            "description": "Learn about the activities of our Truecrew Brand Ambassadors!",
            "post_count": 31,
            "meta": {
                "links": {
                    "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:truecrew-brand-ambassadors",
                    "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:truecrew-brand-ambassadors/help",
                    "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                }
            },
            "parent": 0
        }
    },
    "attachments": {},
    "attachment_count": 0,
    "metadata": [
        {
            "id": "1616",
            "key": "_thumbnail_id",
            "value": "345"
        }
    ],
    "meta": {
        "links": {
            "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/348",
            "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/348/help",
            "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796",
            "replies": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/348/replies/",
            "likes": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/348/likes/"
        }
    },
    "capabilities": {
        "publish_post": false,
        "delete_post": false,
        "edit_post": false
    },
    "other_URLs": {}
},
{
    "ID": 5776,
    "site_ID": 107403796,
    "author": {
        "ID": 101559910,
        "login": "lindseylamont",
        "email": false,
        "name": "Lindsey LaMont",
        "first_name": "Lindsey",
        "last_name": "LaMont",
        "nice_name": "lindseylamont",
        "URL": "",
        "avatar_URL": "https://secure.gravatar.com/avatar/bdc1856d18a295d8287591ff200f826c?s=96&d=mm&r=g",
        "profile_URL": "https://en.gravatar.com/bdc1856d18a295d8287591ff200f826c"
    },
    "date": "2018-11-12T15:06:13+02:00",
    "modified": "2018-11-12T15:15:26+02:00",
    "title": "Life as a Developer Relations Manager",
    "URL": "https://truecaller.blog/2018/11/12/life-as-a-developer-manager/",
    "short_URL": "https://wp.me/p7gEDi-1va",
    "content": "<p>Working hard in the startup world can get you places. Just talk to Harshad, who simply approached our Truecaller development team with a great idea at a local meetup in India. He began as a volunteer evangelist for Truecaller SDK, and is now handling our developer relations helping get devs onboard with implementing Truecaller SDK to assure fast onboarding for their customers.</p>\n<p><strong>How did you first come in contact with Truecaller?</strong></p>\n<p>I was at a developer meetup near me, and I bumped into the Truecaller Team who just started working on the developer platform, <a href=\"https://developer.truecaller.com\" target=\"_blank\" rel=\"noopener\">Truecaller SDK</a>. They wanted new user feedback about the SDK, and I learned more about what it up and coming, and the promise behind the new product.</p>\n<p>&nbsp;</p>\n<p><span class=\"embed-youtube\" style=\"text-align:center; display: block;\"><iframe class='youtube-player' width='474' height='267' src='https://www.youtube.com/embed/owxkj2zFses?version=3&#038;rel=1&#038;fs=1&#038;autohide=2&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;wmode=transparent' allowfullscreen='true' style='border:0;'></iframe></span></p>\n<p><strong>Why an evangelist?</strong></p>\n<p>I come from a startup background, so I have been part of companies where they build things from scratch. Over the first conversation with the Truecaller Team I got more and more excited on the potential of the Truecaller and the upcoming plans for development.</p>\n<blockquote><p>The biggest things I learned was Never Give Up</p></blockquote>\n<p>I have always been a user of Truecaller, and I tried to test the Truecaller app by uninstalling it to see what impact it had on me. I went without it for a couple of days, and by the 3<sup>rd</sup>day, I realized how much I needed the product. I talked to some of my friends to understand why they use Truecaller. Some loved to use the SMS inbox, some were fixated on the dialer, and the insights I got were really helpful. With this experiment and user feedback, I went back and spoke with the Truecaller Team and pitched my involvement from there. Getting to build something from scratch really appealed to me. It’s like building your own startup within a startup itself.</p>\n<figure id=\"attachment_5791\" aria-describedby=\"caption-attachment-5791\" style=\"width: 700px\" class=\"wp-caption aligncenter\"><img data-attachment-id=\"5791\" data-permalink=\"https://truecaller.blog/2018/11/12/life-as-a-developer-manager/harshad-stockholm-2-of-3/\" data-orig-file=\"https://i1.wp.com/truecaller.blog/wp-content/uploads/2018/11/harshad-stockholm-2-of-3.jpg?fit=5220%2C2936&amp;ssl=1\" data-orig-size=\"5220,2936\" data-comments-opened=\"0\" data-image-meta=\"{&quot;aperture&quot;:&quot;2.8&quot;,&quot;credit&quot;:&quot;lindsey lamont&quot;,&quot;camera&quot;:&quot;DSC-RX100M5&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1534903248&quot;,&quot;copyright&quot;:&quot;lindsey lamont&quot;,&quot;focal_length&quot;:&quot;8.8&quot;,&quot;iso&quot;:&quot;125&quot;,&quot;shutter_speed&quot;:&quot;0.016666666666667&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}\" data-image-title=\"harshad-stockholm (2 of 3)\" data-image-description=\"\" data-medium-file=\"https://i1.wp.com/truecaller.blog/wp-content/uploads/2018/11/harshad-stockholm-2-of-3.jpg?fit=300%2C169&amp;ssl=1\" data-large-file=\"https://i1.wp.com/truecaller.blog/wp-content/uploads/2018/11/harshad-stockholm-2-of-3.jpg?fit=474%2C267&amp;ssl=1\" loading=\"lazy\" class=\"wp-image-5791 size-large\" src=\"https://i1.wp.com/truecaller.blog/wp-content/uploads/2018/11/harshad-stockholm-2-of-3.jpg?resize=700%2C394&#038;ssl=1\" alt=\"Harshad Jagtap\" width=\"700\" height=\"394\" data-recalc-dims=\"1\" /><figcaption id=\"caption-attachment-5791\" class=\"wp-caption-text\">Harshad Jagtap</figcaption></figure>\n<p><strong>What’s your journey been like since becoming an evangelist?</strong></p>\n<p>I started as an evangelist when the India presence was small, and now I am a full-time employee working as a Developer Manager.</p>\n<p>It has been a wonderful journey because of the kind of learnings I’ve experienced from the start of my evangelism until now. The biggest things I learned was Never Give Up, one of Truecaller’s main values. Even when you’re presented with challenges, keep working and push towards the right things. It will happen!</p>\n<p><strong>How did this start with SDK?</strong></p>\n<p>The topmost businesses in India are using the platform and leveraging the scale of Truecaller users, this has been a big motivator for me. We get a lot of feedback for huge possibilities can still be explored. It’s great how we can shape a product and open it up to multiple use cases.</p>\n<p><strong>What’s it like working with the Stockholm team?</strong></p>\n<p>Great! One of the things I have noticed is we have people from almost 30 nationalities it brings a great perspective to the table because of their upbringings and ecosystems they’ve been working with. I think this entire thought process makes Truecaller an indispensable product for all users today.</p>\n<figure id=\"attachment_5792\" aria-describedby=\"caption-attachment-5792\" style=\"width: 700px\" class=\"wp-caption aligncenter\"><img data-attachment-id=\"5792\" data-permalink=\"https://truecaller.blog/2018/11/12/life-as-a-developer-manager/harshad-stockholm-3-of-3/\" data-orig-file=\"https://i0.wp.com/truecaller.blog/wp-content/uploads/2018/11/harshad-stockholm-3-of-3.jpg?fit=5472%2C3078&amp;ssl=1\" data-orig-size=\"5472,3078\" data-comments-opened=\"0\" data-image-meta=\"{&quot;aperture&quot;:&quot;1.8&quot;,&quot;credit&quot;:&quot;lindsey lamont&quot;,&quot;camera&quot;:&quot;DSC-RX100M5&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1534903587&quot;,&quot;copyright&quot;:&quot;lindsey lamont&quot;,&quot;focal_length&quot;:&quot;8.8&quot;,&quot;iso&quot;:&quot;160&quot;,&quot;shutter_speed&quot;:&quot;0.033333333333333&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}\" data-image-title=\"harshad-stockholm (3 of 3)\" data-image-description=\"\" data-medium-file=\"https://i0.wp.com/truecaller.blog/wp-content/uploads/2018/11/harshad-stockholm-3-of-3.jpg?fit=300%2C169&amp;ssl=1\" data-large-file=\"https://i0.wp.com/truecaller.blog/wp-content/uploads/2018/11/harshad-stockholm-3-of-3.jpg?fit=474%2C267&amp;ssl=1\" loading=\"lazy\" class=\"size-large wp-image-5792\" src=\"https://i0.wp.com/truecaller.blog/wp-content/uploads/2018/11/harshad-stockholm-3-of-3.jpg?resize=700%2C394&#038;ssl=1\" alt=\"Truecaller Sweden Headquarters\" width=\"700\" height=\"394\" data-recalc-dims=\"1\" /><figcaption id=\"caption-attachment-5792\" class=\"wp-caption-text\">Truecaller Sweden Headquarters</figcaption></figure>\n<p><strong>What does the future bring for you and Truecaller? </strong></p>\n<p>This has been such a driven experience, and now having visited Truecaller headquarters in Stockholm, Sweden and interacted with founding team and members, I am more devoted to take it back to developers to help them onboard their users, drive user growth, and explore more possibilities and use cases on the platform. We hope it becomes makes Truecaller SDK the most indispensable platform for all developers out there!</p>\n<p><strong>Experience in Stockholm</strong></p>\n<p>We are all aware the Swedish ecosystem has given great startups to the world. It’s great to experience it myself and to meet the team who I’ve been remotely coordinating with over the last few months. Everything started here, and to see this very office where they wanted to help millions of people around the world is really inspiring to build things together.</p>\n<p><strong>What is your perception of Stockholm life?</strong></p>\n<p>Been loving it since I put my first foot here. Stockholm is lively, wonderful places to go around. The cool breeze refreshes me after a long day! Old heritage buildings which reflect the cool and minimalistic culture.</p>\n<p>To learn more about Truecaller and our opportunities, check out our <a href=\"http://www.truecaller.com/careers\">Careers</a> site!</p>\n",
    "excerpt": "<p>Working hard in the startup world can get you places. Just talk to Harshad, who simply approached our Truecaller development team with a great idea at a local meetup in India.</p>\n",
    "slug": "life-as-a-developer-manager",
    "guid": "http://blog.truecaller.com/?p=5776",
    "status": "publish",
    "sticky": false,
    "password": "",
    "parent": false,
    "type": "post",
    "discussion": {
        "comments_open": false,
        "comment_status": "closed",
        "pings_open": false,
        "ping_status": "open",
        "comment_count": 0
    },
    "likes_enabled": true,
    "sharing_enabled": true,
    "like_count": 12,
    "i_like": false,
    "is_reblogged": false,
    "is_following": false,
    "global_ID": "c2875aa1551e45588ca29a459cf6d30a",
    "featured_image": "https://i2.wp.com/truecaller.blog/wp-content/uploads/2018/11/truecaller-developers-1-of-1.jpg?fit=5472%2C3078&ssl=1",
    "post_thumbnail": {
        "ID": 5777,
        "URL": "https://truecaller.blog/wp-content/uploads/2018/11/truecaller-developers-1-of-1.jpg",
        "guid": "http://truecaller.blog/wp-content/uploads/2018/11/truecaller-developers-1-of-1.jpg",
        "mime_type": "image/jpeg",
        "width": 5472,
        "height": 3078
    },
    "format": "standard",
    "geo": false,
    "menu_order": 0,
    "page_template": "",
    "publicize_URLs": [],
    "terms": {
        "category": {
            "Behind the Code": {
                "ID": 44826742,
                "name": "Behind the Code",
                "slug": "behind-the-code",
                "description": "",
                "post_count": 38,
                "parent": 0,
                "meta": {
                    "links": {
                        "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:behind-the-code",
                        "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:behind-the-code/help",
                        "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                    }
                }
            },
            "Tech": {
                "ID": 318,
                "name": "Tech",
                "slug": "tech",
                "description": "Posts about tech at Truecaller",
                "post_count": 31,
                "parent": 0,
                "meta": {
                    "links": {
                        "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:tech",
                        "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:tech/help",
                        "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                    }
                }
            }
        },
        "post_tag": {
            "truecaller sdk": {
                "ID": 596586703,
                "name": "truecaller sdk",
                "slug": "truecaller-sdk",
                "description": "",
                "post_count": 9,
                "meta": {
                    "links": {
                        "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags/slug:truecaller-sdk",
                        "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags/slug:truecaller-sdk/help",
                        "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                    }
                }
            }
        },
        "post_format": {}
    },
    "tags": {
        "truecaller sdk": {
            "ID": 596586703,
            "name": "truecaller sdk",
            "slug": "truecaller-sdk",
            "description": "",
            "post_count": 9,
            "meta": {
                "links": {
                    "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags/slug:truecaller-sdk",
                    "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags/slug:truecaller-sdk/help",
                    "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                }
            }
        }
    },
    "categories": {
        "Behind the Code": {
            "ID": 44826742,
            "name": "Behind the Code",
            "slug": "behind-the-code",
            "description": "",
            "post_count": 38,
            "meta": {
                "links": {
                    "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:behind-the-code",
                    "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:behind-the-code/help",
                    "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                }
            },
            "parent": 0
        },
        "Tech": {
            "ID": 318,
            "name": "Tech",
            "slug": "tech",
            "description": "Posts about tech at Truecaller",
            "post_count": 31,
            "meta": {
                "links": {
                    "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:tech",
                    "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:tech/help",
                    "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796"
                }
            },
            "parent": 0
        }
    },
    "attachments": {
        "5792": {
            "ID": 5792,
            "URL": "https://truecaller.blog/wp-content/uploads/2018/11/harshad-stockholm-3-of-3.jpg",
            "guid": "http://truecaller.blog/wp-content/uploads/2018/11/harshad-stockholm-3-of-3.jpg",
            "mime_type": "image/jpeg",
            "width": 5472,
            "height": 3078
        },
        "5791": {
            "ID": 5791,
            "URL": "https://truecaller.blog/wp-content/uploads/2018/11/harshad-stockholm-2-of-3.jpg",
            "guid": "http://truecaller.blog/wp-content/uploads/2018/11/harshad-stockholm-2-of-3.jpg",
            "mime_type": "image/jpeg",
            "width": 5220,
            "height": 2936
        },
        "5777": {
            "ID": 5777,
            "URL": "https://truecaller.blog/wp-content/uploads/2018/11/truecaller-developers-1-of-1.jpg",
            "guid": "http://truecaller.blog/wp-content/uploads/2018/11/truecaller-developers-1-of-1.jpg",
            "mime_type": "image/jpeg",
            "width": 5472,
            "height": 3078
        }
    },
    "attachment_count": 3,
    "metadata": [
        {
            "id": "17859",
            "key": "geo_public",
            "value": "0"
        },
        {
            "id": "17856",
            "key": "_thumbnail_id",
            "value": "5777"
        },
        {
            "id": "17899",
            "key": "_wpas_done_13791681",
            "value": "1"
        },
        {
            "id": "17903",
            "key": "_wpas_done_13791683",
            "value": "1"
        },
        {
            "id": "17894",
            "key": "_wpas_mess",
            "value": "\"The biggest things I learned at #Truecaller was Never Give Up.\" How we took our evangelist to full time employee!"
        }
    ],
    "meta": {
        "links": {
            "self": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/5776",
            "help": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/5776/help",
            "site": "https://public-api.wordpress.com/rest/v1.1/sites/107403796",
            "replies": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/5776/replies/",
            "likes": "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/5776/likes/"
        }
    },
    "capabilities": {
        "publish_post": false,
        "delete_post": false,
        "edit_post": false
    },
    "other_URLs": {}
}];
</script>
<style lang="less" scoped>
    .posts {
        h1 {
            color: #0d84f9;
        }
        h4 {
            color: #8e8787;
        }
    }
    /deep/.wp-block-image {
        img {
            max-height:480px;
            height: 480px;
        }
    }
    h1 {
        color: #8e8787;
    }
    .related-posts{
        display: inline-flex;
        .post {
            width: 50%;
            .post-container {
                width: 100%;
            }
        }
    }
</style>
