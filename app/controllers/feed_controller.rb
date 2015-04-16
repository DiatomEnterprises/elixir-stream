class FeedController < ApplicationController
  respond_to :rss

  def index
    @entries = Entry.order("created_at DESC")

    respond_with @entries
  end
end
