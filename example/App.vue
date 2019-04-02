<template>
  <div>
    <back-to-top>
      <dy-icon size="14" type="&#xe62d;"></dy-icon>
    </back-to-top>

    <header>
      <div class="header">
        <span>dyui</span>
        <span class="subHeader">
          <a target="_blank" href="https://github.com/hanekaoru/dy-ui">
            <dy-icon size="26" type="&#xe719;"></dy-icon>
          </a>
        </span>
      </div>
    </header>

    <div class="wrapper">
      <div class="wrapper-container">
        <div class="wrapper-list">
          <ul>

						<div class="list-title">Basic</div>
						<li><router-link to="/start">安装</router-link></li>
						<li><router-link to="/icon">Icon 图标</router-link></li>
						<li><router-link to="/close">Close 关闭按钮</router-link></li>
						<li><router-link to="/backtotop">BackToTop 回到顶部</router-link></li>
						<li><router-link to="/button">Button 按钮</router-link></li>
						<li><router-link to="/tag">Tag 标签</router-link></li>

						<li><router-link to="/badge">Badge 徽章</router-link></li>

						<div class="list-title">Form</div>
						<li><router-link to="/radio">Radio 单选框</router-link></li>
						<li><router-link to="/checkbox">Checkbox 多选框</router-link></li>
						<li><router-link to="/input">Input 输入框</router-link></li>
						<li><router-link to="/select">Select 选择框</router-link></li>
						<li><router-link to="/switch">Switch 开关</router-link></li>
						<li><router-link to="/slider">Slider 滑块</router-link></li>
						<li><router-link to="/dropDown">DropDown 下拉菜单</router-link></li>
						<li><router-link to="/pagination">Pagination 分页</router-link></li>
						<li><router-link to="/sidebar">SideBar 侧边栏</router-link></li>

						<li><router-link to="/table">Table 表格</router-link></li>
						<li><router-link to="/tab">Tab 选项卡</router-link></li>
						<li><router-link to="/loading">Loading 加载中</router-link></li>

						<div class="list-title">View</div>
						<li><router-link to="/notify">Notify 顶部消息通知</router-link></li>
						<li><router-link to="/message">Message 侧边信息提示</router-link></li>
						<li><router-link to="/dialog">Dialog 对话框</router-link></li>
						<li><router-link to="/carousel">Carousel 走马灯</router-link></li>
						<li><router-link to="/progress">Progress 进度条</router-link></li>
						<li><router-link to="/tooltip">ToolTip 文字提示</router-link></li>
						<li><router-link to="/collapse">Collapse 折叠菜单</router-link></li>
						<li><router-link to="/nav">Nav 导航</router-link></li>
						<li><router-link to="/article">Article 文章</router-link></li>
						
					</ul>
        </div>

        <div class="wrapper-content">
          <article>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.header {
  .subHeader {
    float: right;
    padding: 0 15px;

    a {
      color: #666;
    }

    &:hover {
      a {
        color: #129cff;
      }
    }
  }
}
</style>
