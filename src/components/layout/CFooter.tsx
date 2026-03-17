export default function CFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">爱儿美</h3>
            <p className="text-sm text-slate-400 mb-6 max-w-sm leading-relaxed">
              高端母婴护理品牌，致力于为新生儿家庭提供专业、科学、温馨的月子服务。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">微信</span>
                {/* Wechat Icon placeholder */}
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">微博</span>
                {/* Weibo Icon placeholder */}
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2.5c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">快速链接</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-rose-400 transition-colors">关于我们</a></li>
              <li><a href="#" className="text-sm hover:text-rose-400 transition-colors">服务体系</a></li>
              <li><a href="#" className="text-sm hover:text-rose-400 transition-colors">加入我们</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">联系方式</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-slate-500 mr-2">电话：</span>
                <span className="text-white">400-123-4567</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500 mr-2">邮箱：</span>
                <a href="mailto:contact@ayrmei.com" className="hover:text-rose-400 transition-colors">contact@ayrmei.com</a>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500 mr-2">地址：</span>
                <span>北京市朝阳区建国路88号</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} 爱儿美月子中心. 保留所有权利.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">服务条款</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">京ICP备12345678号</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
