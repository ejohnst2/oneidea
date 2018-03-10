require 'test_helper'

class IdeasControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get ideas_new_url
    assert_response :success
  end

  test "should get create" do
    get ideas_create_url
    assert_response :success
  end

end
