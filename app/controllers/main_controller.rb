class MainController < ApplicationController
  def index
    # detect all components defined in react-demo js bundle
    @components = []
    components_file_contents = File.open('app/javascript/packs/react-demo.js').read
    components_ar = components_file_contents.scan /import.(.*?).from/im
    components_ar.each{|c_ar| @components.push c_ar.first unless c_ar.first == 'ReactOnRails'}
  end

  def component
    @props = { name: params[:name].to_s }
  end
end