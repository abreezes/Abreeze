import React, { Component } from 'react'
import axios from '@/lib/axios'
import './index.less'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { random } from '@/lib'
import { Table, Divider, Tag, Modal, message } from 'antd'
import QueryForm from './queryForm'
import moment from 'moment'

@connect(state => ({
  colorList: state.common.colorList,
  tagList: state.article.tagList
}))
class Manager extends Component {
  state = {
    colorMap: {},
    list: [],
    pagination: {},
    total: 0
  }

  componentDidMount() {
    const { colorList, tagList } = this.props
    let colorMap = {}
    tagList.forEach(item => {
      colorMap[item.name] = colorList[random(colorList)]
    })
    this.setState({ colorMap }, () => this.fetchList({ page: 1 }))
  }

  getColumns = () => {
    // const { colorMap } = this.state
    return [
      {
        title: '标题',
        dataIndex: 'title'
      },
      {
        title: '标签',
        dataIndex: 'tags',
        render: (text, record) => {
          return text.map(d => (
            <Tag color={this.state.colorMap[d.name]} key={d.name}>
              {d.name}
            </Tag>
          ))
        }
      },
      {
        title: '分类',
        dataIndex: 'categories',
        render: (text, record) => {
          return text.map(d => (
            <Tag color={'#2db7f5'} key={d.name}>
              {d.name}
            </Tag>
          ))
        }
      },
      {
        title: '发布时间',
        dataIndex: 'create_at',
        sorter: (a, b) => moment(a.createdAt).isBefore(b.createdAt)? 1 : -1
      },
      {
        title: '修改时间',
        dataIndex: 'update_at',
        sorter: (a, b) => moment(a.updatedAt).isBefore(b.updatedAt) ? 1 : -1
      },
      {
        title: '操作',
        render: (text, record) => {
          return (
            <div className="action">
              <Link to={`/article/${record.id}`}>查看</Link>
              <Divider type="vertical" />
              {/* <span className="btn-edit">编辑</span> */}
              <Link to={{ pathname: '/admin/articles/edit', state: { articleId: record.id } }}>编辑</Link>
              <Divider type="vertical" />
              <span className="btn-delete" onClick={() => this.handleDelete(record.id, record.title)}>
                删除
              </span>
            </div>
          )
        }
      }
    ]
  }

  fetchList = ({ current = 1, pageSize = 10, ...query }) => {
    axios.get('/article', { params: { page: current, pageSize, ...query } }).then(res => {
      const pagination = {
        current,
        pageSize,
        total: res.count
      }
      this.setState({ list: res.results, pagination })
    })
  }

  handleChange = pagination => {
    this.fetchList({ ...pagination, ...this.state.query })
  }

  /**
   * @param {Number} - 文章 id
   */
  handleDelete = (articleId, title) => {
    Modal.confirm({
      title: '您确认删除该文章?，此操作不可恢复！',
      content: `文章： ${title} `,

      onOk: () => {
          let token=localStorage.getItem('token')
          axios({
              // url:'/article',
              url: '/article/' + articleId,
              method: 'delete',
              // data: params,
              headers: {
                  Authorization: ' JWT ' + token
              }
          }).then(res => {
                if (res.code === 200) {
                  this.fetchList(this.state.pagination)
                  message.success(res.message)
                }
              })
        // axios.delete('/article/delete', { params: { articleId } }).then(res => {
        //   if (res.code === 200) {
        //     this.fetchList(this.state.pagination)
        //     message.success(res.message)
        //   }
        // })
      }
    })
  }

  getQuery = query => {
    this.setState({ query })

    this.fetchList({ ...query, current: 1 })
  }

  render() {
    const { list, pagination } = this.state
    return (
      <div className="manager">
        <QueryForm getQuery={this.getQuery} />
        <Table
          rowKey="id"
          bordered
          columns={this.getColumns()}
          dataSource={list}
          pagination={pagination}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Manager
