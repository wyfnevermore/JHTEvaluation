package com.chinaias.entity;

import java.util.List;

import com.chinaias.util.Tools;

public class Page {
	private int pagesize;// 每页显示个数
	private int curpage;// 当前页
	private int pagecount;// 总页数
	private int total;// 总记录数
	private List rows;

	public int getPagesize() {
		return pagesize;
	}

	public void setPagesize(String pagesize) {
		if (Tools.isNullOrEmpty(pagesize))
			this.pagesize = 0;
		else
			this.pagesize = Integer.parseInt(pagesize);
	}

	public int getCurpage() {
		return curpage;
	}

	public void setCurpage(String curpage) {
		if (Tools.isNullOrEmpty(curpage))
			this.curpage = 0;
		else
			this.curpage = Integer.parseInt(curpage);

	}

	public int getPagecount() {
		return pagecount;
	}

	public void setPagecount(int pagecount) {
		this.pagecount = pagecount;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public List getRows() {
		return rows;
	}

	public void setRows(List rows) {
		this.rows = rows;
	}

	public void setPagesize(int pagesize) {
		this.pagesize = pagesize;
	}

	public void setCurpage(int curpage) {
		this.curpage = curpage;
	}

}
