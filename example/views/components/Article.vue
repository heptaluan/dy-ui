<template>
<div class="nav-box">

        <div class="components-title">Article 文章</div>

        <div class="components-wrapper">
            <ul>
                <li>

<div class="nav-content">
    <h2 class="h2">Article 文章</h2>
    
    <dy-article>
        <dy-article-header title="中国港机" meta="作者：镝次元" time="2017年12月15日"></dy-article-header>
        <dy-article-body>
            <dy-article-lead>
                1月3日，亚洲最大绞吸挖泥船“天鲲号”下水,长140米,宽27.8米,最大挖掘深度35米，总装机功率25843千瓦，标准疏浚能力每小时6000立方米。中国港口机械设备（下简称中国港机）的各项主要指标已属世界领先水平。
            </dy-article-lead>
            
            <p>据联合国数据显示，在港机设备中，来自中国的龙门起重机和基座臂起重机贸易额均连续11年排名第一，桥式起重机更是蝉联首位长达16年。最近几年，这三类产品的销售势头愈加迅猛，是排名第二国家的两倍还多。数据显示，中国港机装备全球份额，已经从五年前的70%增长到82%，据英国权威杂志《World Cargo News》统计，从2015年6月至2016年6月间，全球共有271台岸桥订单，其中222台订单来自中国，占比82%（在欧美市场的占有率更是高达90%以上）。这意味着，中国港机正在世界各个港口忙碌着，搬运着这个世界。</p>
            <img src="http://image.dydata.io/GcGgDV6j8j1X2iVpQkBzvv.jpg" alt="">
            <p>据联合国数据显示，在港机设备中，来自中国的龙门起重机和基座臂起重机贸易额均连续11年排名第一，桥式起重机更是蝉联首位长达16年。最近几年，这三类产品的销售势头愈加迅猛，是排名第二国家的两倍还多。数据显示，中国港机装备全球份额，已经从五年前的70%增长到82%，据英国权威杂志《World Cargo News》统计，从2015年6月至2016年6月间，全球共有271台岸桥订单，其中222台订单来自中国，占比82%（在欧美市场的占有率更是高达90%以上）。这意味着，中国港机正在世界各个港口忙碌着，搬运着这个世界。</p>
            <img src="http://image.dydata.io/GcGgDV6j8j1X2iVpQkBzvv.jpg" alt="">
            <p>
                “一带一路”倡议的提出给中国港机又提供了巨大的发展空间，据统计，中国企业已参与了“一带一路”沿线13个国家、20个港口的经营，这意味着中国港机又将在一带一路的港口落地生根，振华重工，三一重工、中联重工等国内工程机械龙头都在积极探索改良制造工艺，输送贴合市场需求的港机产品。特别是被国际港口界看好的自动化码头系统装备，继青岛港之后，将陆续在洋山港、厦门港、阿联酋阿布扎比哈利法港等地建成运行，成为现代码头配置的标杆。 2017年11月，工业和信息化部印发的《高端智能再制造行动计划（2018-2020年）》，将探索大型港口机械的高端智能再制造技术列为主要任务之一。预计到2020年，拆解、检测、成形加工等制约性技术将被突破，90%以上的港机将采用电力、太阳能或风能代替传统的能源，中国港机正朝着自动化、集成化和绿色友好的高端智能设备稳步迈进。
            </p>
            <img src="http://image.dydata.io/6shoiiCyWvHrMzMeti5MhF.jpg" alt="">
        </dy-article-body>
    </dy-article>

</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>dy-article</code> 组件包裹 <code>dy-article-header</code>，<code>dy-article-body</code> 组件使用即可</p>
        <p><code>dy-article-header</code> 组件当中的 <code>title</code> 参数为必填项，<code>meta</code> 参数和 <code>time</code> 参数为选填项</p>
        <p><code>dy-article-header</code> 组件当中包含一个可选组件 <code>dy-article-lead</code>，表示摘要</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>title</code>  --  必填项，指定文章标题</p>
        <p><code>meta</code>  --  选填项，指定文章作者信息</p>
        <p><code>time</code>  --  选填项，指定文章发表时间</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-article&gt;
            &lt;dy-article-header title="中国港机" meta="作者：镝次元" time="2017年12月15日"&gt;&lt;/dy-article-header&gt;
            &lt;dy-article-body&gt;
                &lt;dy-article-lead&gt;
                    1月3日，亚洲最大绞吸挖泥船“天鲲号”下水,长140米 ... ...
                &lt;/dy-article-lead&gt;
                
                &lt;p&gt;据联合国数据显示，在港机设备中，来自中国的龙门 ... ...&lt;/p&gt;
                &lt;img src="http://image.dydata.io/GcGgDV6j8j1X2iVpQkBzvv.jpg" alt=""&gt;
                &lt;p&gt;据联合国数据显示，在港机设备中，来自中国的龙门起重机和基座臂 ... ...&lt;/p&gt;
                &lt;img src="http://image.dydata.io/GcGgDV6j8j1X2iVpQkBzvv.jpg" alt=""&gt;
                &lt;p&gt;
                    “一带一路”倡议的提出给中国港机又提供了巨大的发展空间，据统计，中国企业 ... ...
                &lt;/p&gt;
                &lt;img src="http://image.dydata.io/6shoiiCyWvHrMzMeti5MhF.jpg" alt=""&gt;
            &lt;/dy-article-body&gt;
        &lt;/dy-article&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
            </ul>
        </div>


</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	};
</script>

<style lang="scss">
.nav-box {
    .components-title {
        font-size: 22px;
        margin: 24px 0;
        color: #409EFF;
        padding: 0 25px 24px;
        border-bottom: 1px solid #d7dde4;
    }
    .components-wrapper {
        padding: 0 25px;

        .nav-content {
            margin-top: 15px;
            margin-bottom: 20px;
        }

        .h2 {
            font-size: 16px;
            font-weight: normal;
            margin: 20px 0;
            font-weight: 600;
        }
        
        .code-title {
            font-size: 14px;
            margin-bottom: 15px;
        }

        .code-tip {
            display: block;
            padding: .5em;
            background: #23241f;
            color: #fff;
            font-size: 14px;
            text-indent: 10px;
            padding: 10px 0;

            p {
                margin: 5px;
            }

            code {
                color: #9CDCFE;
            }
        }

        pre {
            display: block;
            font-size: 14px;
            margin: -30px 0 0 0;
            padding: 0;
            width: 100%;
        }
    }

}
</style>


