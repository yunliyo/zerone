<script setup lang="ts">
import type { Friend } from '~~/homepage.config'

useHead({ title: '友情链接' })
definePageMeta({ headerText: '我的小伙伴们' })

const appConfig = useAppConfig()
const friends = (appConfig.friends as Friend[]) || []
</script>

<template>
<ZTitle icon="🔗">友情链接</ZTitle>

<div v-if="friends.length === 0" class="empty-state">
  <Icon name="ri:link-unlink-m" class="empty-icon" />
  <p>暂无友链，欢迎来交换友链~</p>
</div>

<div v-else class="friends-list">
  <ZRawLink v-for="friend in friends" :key="friend.url" :to="friend.url" class="friend-card" target="_blank" rel="noopener">
    <div class="friend-avatar">
      <img v-if="friend.avatar" :src="friend.avatar" :alt="friend.name" />
      <Icon v-else name="ri:user-3-line" />
    </div>
    <div class="friend-info">
      <h2 class="friend-name">{{ friend.name }}</h2>
      <p class="friend-desc">{{ friend.desc }}</p>
    </div>
  </ZRawLink>
</div>
</template>

<style lang="scss" scoped>
.friends-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 8px;
}

.friend-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  transition: all 0.2s;

  &:hover {
    background-color: var(--c-bg-soft);
    transform: translateY(-2px);
  }
}

.friend-avatar {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--c-bg-1);
  font-size: 1.6em;
  color: var(--c-text-3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.friend-info {
  min-width: 0;
}

.friend-name {
  font-size: 1.1em;
  font-weight: 550;
  margin-bottom: 4px;
}

.friend-desc {
  font-size: 0.9em;
  color: var(--c-text-2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em 0;
  color: var(--c-text-3);
  gap: 12px;

  .empty-icon {
    font-size: 3em;
    opacity: 0.3;
  }

  p {
    font-size: 1em;
    opacity: 0.6;
  }
}
</style>
