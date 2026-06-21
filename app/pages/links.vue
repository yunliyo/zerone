<script setup lang="ts">
const appConfig = useAppConfig()

useHead({ title: '链树' })
definePageMeta({ headerText: '馀事做诗人' })

interface LinkItem {
  icon?: string
  url?: string
  label?: string
  text?: string
  desc?: string
  qr?: string
}

const activeQr = ref<{ label: string, qr: string } | null>(null)

function handleClick(item: LinkItem) {
  if (item.qr) {
    activeQr.value = { label: (item.label || item.text)!, qr: item.qr }
  }
}

const socialLinks: LinkItem[] = [
  { icon: 'ri:github-line', url: 'https://github.com/yunliyo', label: 'GitHub' },
  { icon: 'ri:mail-line', url: `mailto:${appConfig.author.email}`, label: 'E-Mail' },
  { icon: 'ri:wechat-line', label: '微信', qr: '/yunliyo101.png' },
]

const linkButtons: LinkItem[] = [
  { text: '博客', url: 'https://blog.liqiang.info', icon: 'ri:file-list-3-line', desc: '记录技术与生活' },
  { text: '简历', url: 'https://resume.liqiang.info', icon: 'ph:briefcase', desc: '我的个人简历' },
  { text: 'Linux命令大全', url: 'https://linux.liqiang.info', icon: 'ri:terminal-line', desc: 'Linux命令手册' },
  { text: '犹为君', url: 'https://boe.icu', icon: 'ph:planet', desc: '让我们生活的世界充满诗意' },
  { text: '赞助支持', icon: 'ri:hand-heart-line', desc: '感谢你的支持', qr: '/donate.png' },
]
</script>

<template>
<div class="linktree">
  <NuxtPicture
    class="linktree-avatar"
    :src="appConfig.author.avatar"
    :alt="`${appConfig.author.name} 的头像`"
    width="96"
    height="96"
  />

  <h1 class="linktree-name">
    {{ appConfig.author.name }}
  </h1>

  <p class="linktree-bio">
    {{ appConfig.description }}
  </p>

  <p class="linktree-subtitle">
    {{ appConfig.subtitle }}
  </p>

  <nav class="linktree-socials">
    <template v-for="item in socialLinks" :key="item.label">
      <a
        v-if="item.qr"
        href="javascript:void 0"
        :aria-label="item.label"
        v-tip="item.label"
        class="linktree-social-link"
        @click.prevent="handleClick(item)"
      >
        <Icon :name="item.icon!" />
      </a>
      <a
        v-else
        :href="item.url"
        :aria-label="item.label"
        target="_blank"
        rel="noopener noreferrer"
        v-tip="item.label"
        class="linktree-social-link"
      >
        <Icon :name="item.icon!" />
      </a>
    </template>
  </nav>

  <nav class="linktree-buttons">
    <template v-for="btn in linkButtons" :key="btn.text">
      <a
        v-if="btn.qr"
        href="javascript:void 0"
        class="linktree-btn"
        @click.prevent="handleClick(btn)"
      >
        <Icon v-if="btn.icon" :name="btn.icon" class="linktree-btn-icon" />
        <span class="linktree-btn-body">
          <span class="linktree-btn-text">{{ btn.text }}</span>
          <span v-if="btn.desc" class="linktree-btn-desc">{{ btn.desc }}</span>
        </span>
      </a>
      <a
        v-else
        :href="btn.url"
        :target="btn.url!.startsWith('http') ? '_blank' : undefined"
        :rel="btn.url!.startsWith('http') ? 'noopener noreferrer' : undefined"
        class="linktree-btn"
      >
        <Icon v-if="btn.icon" :name="btn.icon" class="linktree-btn-icon" />
        <span class="linktree-btn-body">
          <span class="linktree-btn-text">{{ btn.text }}</span>
          <span v-if="btn.desc" class="linktree-btn-desc">{{ btn.desc }}</span>
        </span>
      </a>
    </template>
  </nav>

  <Teleport to="#z-root">
    <Transition name="qr-fade">
      <div v-if="activeQr" class="qr-overlay" @click.self="activeQr = null">
        <div class="qr-modal">
          <button class="qr-close" @click="activeQr = null">
            <Icon name="ri:close-line" />
          </button>
          <p class="qr-title">{{ activeQr.label }}</p>
          <NuxtImg
            :src="activeQr.qr"
            :alt="activeQr.label"
            width="300"
            height="300"
            class="qr-image"
          />
          <p class="qr-hint">扫描二维码</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</div>
</template>

<style lang="scss" scoped>
.linktree {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 680px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  text-align: center;
}

.linktree-avatar {
  display: block;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--c-border);
  box-shadow: 0 4px 16px var(--ld-shadow);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}

.linktree-name {
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--c-text);
}

.linktree-bio {
  margin-top: 0.4rem;
  font-size: 1rem;
  color: var(--c-text-2);
}

.linktree-subtitle {
  margin-top: 0.2rem;
  font-size: 0.85rem;
  color: var(--c-text-3);
  font-style: italic;
}

.linktree-yiyan {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--c-text-2);
}

.linktree-socials {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.linktree-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--c-bg-2);
  color: var(--c-text-2);
  font-size: 1.25rem;
  transition: all 0.2s;

  &:hover {
    background: var(--c-primary);
    color: #fff;
    transform: translateY(-2px);
  }
}

.linktree-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  margin-top: 1.5rem;
}

.linktree-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.85rem 1.25rem;
  border: 1px solid var(--c-border);
  border-radius: 0.75rem;
  background: var(--c-bg-1);
  color: var(--c-text-1);
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  text-align: left;
  transition: all 0.2s;

  &:hover {
    border-color: var(--c-primary);
    background: var(--c-primary-soft);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px var(--ld-shadow);
  }

  &:active {
    transform: translateY(0);
  }
}

.linktree-btn-icon {
  flex-shrink: 0;
  width: 1.5em;
  text-align: center;
  font-size: 1.15em;
  color: var(--c-primary);
}

.linktree-btn-body {
  flex: 1;
  min-width: 0;
  text-align: center;
}

.linktree-btn-text {
  display: block;
}

.linktree-btn-desc {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--c-text-3);
}

@media (max-width: $breakpoint-mobile) {
  .linktree {
    padding: 1rem 0.5rem 3rem;
  }

  .linktree-avatar {
    width: 80px;
    height: 80px;
  }

  .linktree-name {
    font-size: 1.35rem;
  }

  .linktree-btn {
    padding: 0.75rem 1rem;
  }
}

/* QR 模态框 */
.qr-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
}

.qr-modal {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem 1.5rem;
  border-radius: 1rem;
  background: var(--c-bg);
  box-shadow: 0 8px 32px var(--ld-shadow);
  max-width: 350px;
  width: 90vw;
}

.qr-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: var(--c-text-2);
  font-size: 1.25rem;
  transition: all 0.2s;

  &:hover {
    background: var(--c-bg-2);
    color: var(--c-text);
  }
}

.qr-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--c-text);
}

.qr-image {
  display: block;
  margin-top: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--c-border);
}

.qr-hint {
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--c-text-3);
}

.qr-fade-enter-active,
.qr-fade-leave-active {
  transition: opacity 0.25s ease;

  .qr-modal {
    transition: transform 0.25s ease;
  }
}

.qr-fade-enter-from,
.qr-fade-leave-to {
  opacity: 0;

  .qr-modal {
    transform: scale(0.9);
  }
}
</style>
