import React, { Component } from 'react'
import './index.less'
import AuthorAvatar from '@/components/web/AuthorAvatar'
import axios from '@/lib/axios'
import { connect } from 'react-redux'
import { generateColorMap } from '@/redux/common/actions'

import { Divider, Rate } from 'antd'

import Comment from '@/components/web/comment'

@connect(
  null,
  { generateColorMap }
)
class About extends Component {
  state = { commentList: [] }

  // componentDidMount() {
  //   this.fetchList()
  // }
  //
  // fetchList = () => {
  //   axios.get('/comment/getAboutComments').then(res => {
  //     this.props.generateColorMap(res.rows) // 生成头像的颜色匹配
  //     this.setState({ commentList: res.rows })
  //   })
  // }

  setCommentList = commentList => this.setState({ commentList })

  render() {
    return (
      <div className="content-inner-wrapper about">
        <AuthorAvatar />
        <span className="desc">Python渣渣一枚</span>
        <Divider orientation="left">博客简述</Divider>
        {/* <p>主要是用来记录博主学习而作！</p> */}
        <p>本博客使用的技术为 react v16.8 + antd + django + django restframework + mysql</p>
          <p>前端使用 郭大大的react v16.8 + antd--><a target="_blank" rel="noreferrer noopener" href="https://github.com/gershonv/react-blog">github</a>  </p>
          <p>后端使用 django + django restframework</p>

        <p>
          源码地址为{' '}
          <a target="_blank" rel="noreferrer noopener" href="https://github.com/gershonv/react-blog">
            github
          </a>
          ，仅供参考，不做商业用途！
        </p>
        <Divider orientation="left">关于我</Divider>
        <ul className="about-list">
          <li>人生苦短我用Python!</li>
          <li>学历专业：大专 非科班半路折腾Python</li>
          <li>联系方式：wechat Dreamer_jiang</li>
            <li>联系邮箱：laujiange@gmail.com</li>
          {/*<li>*/}
            {/*/!*其他博客地址：*!/*/}
            {/*/!*<a target="_blank" rel="noreferrer noopener" href="https://gershonv.github.io/">*!/*/}
              {/*/!*hexo 博客*!/*/}
            {/*/!*</a>*!/*/}
            {/*/!*<Divider type="vertical" />*!/*/}
            {/*/!*<a target="_blank" rel="noreferrer noopener" href="https://juejin.im/user/5acac6c4f265da2378408f92">*!/*/}
              {/*/!*掘金主页*!/*/}
            {/*/!*</a>*!/*/}
          {/*</li>*/}
          <li>
            技能
            <ul>
              <li>
                  Python 技能树:熟悉Django web框架,Django REST,requests/scrapy/selenium/Appium 为主的爬虫框架，正则表达式/CSS/Xpath/ 等信息提取方式
                {/*<Rate defaultValue={3} disabled />*/}
              </li>
              <li>
                  数据库技能树：常用 MySQL 作为 web 后端数据库，MongoDB 作为爬虫信息存储，Redis 用作缓存，熟悉常规的 CURD 操作
                {/*<Rate defaultValue={3} disabled />*/}
              </li>
              {/*<li>*/}
                  {/*REST-framework：熟练掌握使用！*/}
                {/*<Rate defaultValue={3} disabled />*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*webpack: 入门级别，可以对脚手架进行针对性的配置！*/}
                {/*<Rate defaultValue={2} disabled />*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*node mysql：针对需求可以做到简单的数据库设计、接口的开发与设计！*/}
                {/*<Rate defaultValue={2} disabled />*/}
              {/*</li>*/}
            </ul>
          </li>
          <li>
            其他
            <ul>
              <li>常用开发环境： Ubuntu、Windowns</li>
              <li>ide 工具： Pycharm、Sublime Text</li>
              <li>良好的代码习惯： 注释规范</li>
            </ul>
          </li>
          <li>
            个人
            <ul>
              <li>偶尔玩玩游戏、看看电影、看看书</li>
              <li>联系方式在上面，欢迎交流！</li>
            </ul>
          </li>
        </ul>

        {/*<Comment articleId={-1} commentList={this.state.commentList} setCommentList={this.setCommentList} />*/}
      </div>
    )
  }
}

export default About
