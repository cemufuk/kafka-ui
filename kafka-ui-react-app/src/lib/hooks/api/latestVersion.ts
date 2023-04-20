import { useQuery } from '@tanstack/react-query';
import {
  QUERY_REFETCH_OFF_OPTIONS,
  GIT_REPO_LATEST_RELEASE_LINK,
} from 'lib/constants';

const fetchLatestVersion = async () => {
  const data = `{
    "url": "https://api.github.com/repos/provectus/kafka-ui/releases/99426762",
    "assets_url": "https://api.github.com/repos/provectus/kafka-ui/releases/99426762/assets",
    "upload_url": "https://uploads.github.com/repos/provectus/kafka-ui/releases/99426762/assets{?name,label}",
    "html_url": "https://github.com/provectus/kafka-ui/releases/tag/v0.6.2",
    "id": 99426762,
    "author": {
      "login": "Haarolean",
      "id": 1494347,
      "node_id": "MDQ6VXNlcjE0OTQzNDc=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1494347?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Haarolean",
      "html_url": "https://github.com/Haarolean",
      "followers_url": "https://api.github.com/users/Haarolean/followers",
      "following_url": "https://api.github.com/users/Haarolean/following{/other_user}",
      "gists_url": "https://api.github.com/users/Haarolean/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Haarolean/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Haarolean/subscriptions",
      "organizations_url": "https://api.github.com/users/Haarolean/orgs",
      "repos_url": "https://api.github.com/users/Haarolean/repos",
      "events_url": "https://api.github.com/users/Haarolean/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Haarolean/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "RE_kwDODV18rs4F7SHK",
    "tag_name": "v0.6.2",
    "target_commitish": "release/0.6.2",
    "name": "v0.6.2",
    "draft": false,
    "prerelease": false,
    "created_at": "2023-04-13T16:12:47Z",
    "published_at": "2023-04-13T16:24:57Z",
    "assets": [
      {
        "url": "https://api.github.com/repos/provectus/kafka-ui/releases/assets/103546903",
        "id": 103546903,
        "node_id": "RA_kwDODV18rs4GLAAX",
        "name": "kafka-ui-api-v0.6.2.jar",
        "label": "",
        "uploader": {
          "login": "github-actions[bot]",
          "id": 41898282,
          "node_id": "MDM6Qm90NDE4OTgyODI=",
          "avatar_url": "https://avatars.githubusercontent.com/in/15368?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/github-actions%5Bbot%5D",
          "html_url": "https://github.com/apps/github-actions",
          "followers_url": "https://api.github.com/users/github-actions%5Bbot%5D/followers",
          "following_url": "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
          "gists_url": "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
          "organizations_url": "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
          "repos_url": "https://api.github.com/users/github-actions%5Bbot%5D/repos",
          "events_url": "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
          "received_events_url": "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
          "type": "Bot",
          "site_admin": false
        },
        "content_type": "binary/octet-stream",
        "state": "uploaded",
        "size": 90083044,
        "download_count": 187,
        "created_at": "2023-04-13T16:34:08Z",
        "updated_at": "2023-04-13T16:34:10Z",
        "browser_download_url": "https://github.com/provectus/kafka-ui/releases/download/v0.6.2/kafka-ui-api-v0.6.2.jar"
      }
    ],
    "tarball_url": "https://api.github.com/repos/provectus/kafka-ui/tarball/v0.6.2",
    "zipball_url": "https://api.github.com/repos/provectus/kafka-ui/zipball/v0.6.2",
    "body": "This minor release contains CVE fixes (dependencies bumps) and some functional fixes as well.\r\n\r\n## 🔨Bug Fixes\r\n\r\nFE: Fix HTTP 400 for clusters with special symbols (#3591)\r\nFE: Messages filtering by offset & timestamp doesn't work (#3582)\r\nBE: Exempt appconfig from rbac check (#3647)\r\nBE: Fix loading freezes in case one of the brokers is down (#3618)\r\nFE: Fix config param source nullability (#3661)\r\n\r\n## Security\r\n\r\nCVE fixes, Upgrade Spring Boot (#3624)\r\n\r\n**Full Changelog**: https://github.com/provectus/kafka-ui/compare/v0.6.1...v0.6.2\r\n\r\n## Contributors\r\n@Haarolean, @NeiruBugz, @iliax",
    "reactions": {
      "url": "https://api.github.com/repos/provectus/kafka-ui/releases/99426762/reactions",
      "total_count": 19,
      "+1": 10,
      "-1": 0,
      "laugh": 1,
      "hooray": 4,
      "confused": 0,
      "heart": 2,
      "rocket": 1,
      "eyes": 1
    },
    "mentions_count": 3
  }
  ` 

  return data;
};

export function useLatestVersion() {
  return useQuery(
    ['latestVersion'],
    fetchLatestVersion,
    QUERY_REFETCH_OFF_OPTIONS
  );
}
